const {fileURLToPath}=require('url');
const path=require('path');
const {readFile,writeFile}=require('fs');

const _filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(_filename);
console.log(__dirname);
readFile(path.join(__dirname),'utf-8',(err,data)=>{
    if(err)throw err;
    let customers=JSON.parse(data);
    writeFile(path.join(__dirname,'util','customers.join'),JSON.stringify(customers),'utf-8',(err,data)=>{
        if(err)throw err;
        console.log('Data written Successfully');
    })
});
