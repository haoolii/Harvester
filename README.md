# Harvester

## API Document

### 盤後資訊 > 個股日成交資訊 上市公司

[政府資料開放平台](https://data.gov.tw/dataset/11550)

所有上市公司當日成交資訊

`GET https://www.twse.com.tw/exchangeReport/STOCK_DAY_ALL?response=open_data`

個股上市公司當月所有成交資訊

`GET https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20171106&stockNo=2409`

### 盤後資訊 > 個股日成交資訊 上櫃公司

[證券櫃買中心](https://www.tpex.org.tw)

所有上櫃公司當日成交資訊

`GET https://www.tpex.org.tw/web/stock/aftertrading/daily_close_quotes/stk_quote_result.php?l=zh-tw&o=csv&d=110/07/02&s=0,asc,0`

個股上櫃公司當月所有成交資訊

`GET https://www.tpex.org.tw/web/stock/aftertrading/daily_trading_info/st43_download_UTF-8.php?l=zh-tw&d=110/07&stkno=8240&s=0,asc,0`
