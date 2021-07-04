import fetch from "node-fetch";

export const exchangeReportSTOCK_DAY = async (date, stockNo) => {
  return fetch(
    `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${stockNo}`
  ).then((res) => res.json());
};
