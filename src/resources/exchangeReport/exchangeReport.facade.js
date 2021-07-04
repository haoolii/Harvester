import { exchangeReportSTOCK_DAY } from "../../data/tpex";
import { ExchangeReport } from "./exchangeReport.model";
import { joinTpexSTOCK_DAY } from "../../utils";

export const syncDataFromTpex = async (year, month, stockNo) => {
  const list = await getFromTpex(`${year}${month}01`, stockNo);
  list.data.forEach(async (l) => {
    await createOne({ ...l, 股票代號: stockNo });
  });
};

export const getFromTpex = async (date, stockNo) => {
  try {
    let res = await exchangeReportSTOCK_DAY(date, stockNo);
    return Object.assign(joinTpexSTOCK_DAY(res), { stockNo });
  } catch (e) {
    console.error(e);
  }
};

export const getOne = async (model) => {
  try {
    const foundDoc = await ExchangeReport.findOne({
      股票代號: model.股票代號,
      日期: model.日期,
    })
      .lean()
      .exec();
    return foundDoc;
  } catch (e) {
    console.error(e);
  }
};

export const createOne = async (model) => {
  try {
    const foundDoc = await ExchangeReport.findOne({
      股票代號: model.股票代號,
      日期: model.日期,
    })
      .lean()
      .exec();

    if (!foundDoc) {
      const createdDoc = await ExchangeReport.create(model);
      return createdDoc;
    }

    return foundDoc;
  } catch (e) {
    console.log(e);
  }
};

export const updateOne = async (model) => {
  try {
    const updatedDoc = await ExchangeReport.findOneAndUpdate(
      {
        股票代號: model.股票代號,
        日期: model.日期,
      },
      model,
      { new: true }
    )
      .lean()
      .exec();

    return updatedDoc;
  } catch (e) {
    console.error(e);
  }
};

export const getMany = async (model, range) => {
  try {
    const docs = await ExchangeReport.find({
      ...model,
      日期: {
        $gte: range.從,
        $lte: range.到,
      },
    })
      .lean()
      .exec();
    return docs;
  } catch (e) {
    console.error(e);
  }
};
