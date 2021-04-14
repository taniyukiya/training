const fs =require('fs');
    try{
        const existance = fs.statSync('countries-50m.json')
        //console.log(existance);
    }
    catch(err){
        console.log(error)
    }

    try{
        const countryList =fs.readFileSync('countries-50m.json')
        let result = [];
        var obj = JSON.parse(countryList)
        console.log(obj);
    }
    catch(err){
        console.log(error)
    }