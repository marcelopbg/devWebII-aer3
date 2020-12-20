const fs = require('fs');
const fileName = 'message.txt';

try {
    fs.unlinkSync(fileName)
  } catch(err) {
    console.error(err)
  }
fs.readdir('./', (err, files) => {
    console.log(files);
  });