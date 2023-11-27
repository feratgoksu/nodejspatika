const fs = require('fs')

// fs.writeFile("employee.json",'{"name": "Employee 1 Name", "salary": 2000}','utf8',(err)=>{
//     if (err) console.log(err);
// })
// fs.readFile("employee.json",'utf8',(err,data)=>{
//  if (err) console.log(err);
//     console.log(data);
// })
// fs.appendFile('employee.json','{"name": "Employee 2 Name", "salary": 4000}','utf8',(err)=>{
//     if (err) console.log();
// })
fs.unlink('employee.json',(err)=>{
    if (err) console.log();
})