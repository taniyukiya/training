const fs =require('fs');
    try{
        const existance = fs.statSync('countries-50m.json');
        //console.log(existance);
    }
    catch(err){
        console.log(error)
    }

    try{
        const countryData =fs.readFileSync('countries-50m.json');
        let resultList = [];
        var obj = JSON.parse(countryData);
        //var jsonCount = Object.keys(obj).length; 普通の連想配列ならこれでOKだけどネストなので無力
        function getValue(obj) {
            if(typeof obj === "object"){
                var strValue='';
                for(key in obj){
                   if(key=="name"){
                        resultList.push();
                   }                 
                }
                
            }
        }

        }


    
    catch(err){
        console.log(error)
    }