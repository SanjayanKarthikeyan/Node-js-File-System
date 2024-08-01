
var fs = require('fs');
 


fs.writeFile(`${new Date()}.txt`, new Date().toLocaleString(), function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});