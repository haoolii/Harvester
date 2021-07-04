import { connect } from "./utils/db";
import { syncDataFromTpex } from "./resources/exchangeReport/exchangeReport.facade";

export const start = async () => {
  try {
    await connect();
    // await syncDataFromTpex('2021', '04', '2603');
  } catch (e) {
    console.error(e);
  }
};
