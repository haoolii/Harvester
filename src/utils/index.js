// 移除千分位
export const parsethousandSeparator = (numberString) => parseFloat(numberString.replace(/,/g, ''));

// join 
export const joinTpexSTOCK_DAY = (fullData) => {
    const { date, fields, data } = fullData;

    const outPutData = [];

    data.forEach(ds => {
        const columnObj = {};
        ds.forEach((d, i) => {
            let da;
             // 日期不能Parse改成西元
            if (fields[i] === '日期')
            {
                let dateArr = d.split('/');
                dateArr[0] = parseInt(dateArr[0]) + 1911;
                da = dateArr.join('/');
            } 
            else if (fields[i] === '漲跌價差')
            {
                da = parsethousandSeparator(d.replace(/X/g, ''))
            }
            else
            {
                da = parsethousandSeparator(d);
            }

            columnObj[fields[i]] = da
        });
        outPutData.push(columnObj)
    });

    return {
        fields,
        date,
        data: outPutData
    }
}