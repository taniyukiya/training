const fs = require("fs");
try {
  const existance = fs.statSync("countries-50m.json");
  //console.log(existance);
} catch (err) {
  console.log(err);
}

try {
  const countryData = fs.readFileSync("countries-50m.json");
  let resultList = [];
  const Jsonobj = JSON.parse(countryData);
  //var jsonCount = Object.keys(obj).length; 普通の連想配列ならこれでOKだけどネストなので無力
  function getValue(obj) {
    if (typeof obj === "object") {
      let strValue = "";
        for (key in obj) {
            if (key === "name") {
          resultList.push(obj[key]);
             }
            strValue += getValue(obj[key]);
        }
      return strValue;
    } else {
      return obj;
    }
  }
  getValue(Jsonobj);
  //console.log(getValue(Jsonobj));
  resultList = JSON.stringify(resultList);
  fs.writeFile("./result.json", resultList, "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  //console.log(resultList);
  //console.log(resultList.length);
} catch (e) {
  console.log(e);
}
