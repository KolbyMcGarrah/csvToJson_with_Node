
const fs=require('fs')
const path=require('path')
const inputFN = process.argv[2]
const outputFileName = process.argv[3]
const csvFilePath= __dirname + `\\${inputFN}.csv`
const csv=require('csvtojson')
csv().fromFile(csvFilePath).then((jsonObj) => {
    
    try{
        fs.writeFileSync(__dirname + `/${outputFileName}.json`, JSON.stringify(jsonObj))
        console.log(`your file was converted from csv to json and stored in the following file ${outputFileName}.json`)
    }
    catch(error){
        console.log('There was an error converting your file')
    }    
})
const jsonArray=csv().fromFile(csvFilePath);


