const express = require('express')
const app = express()
const port = 3000
const fileUpload = require('express-fileupload');
app.use(express.json())
// default options
app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload', function(req, res) {
    let sampleFile;
    let uploadPath;
    console.log(req.body)
    // console.log(req.body)
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload/' + sampleFile.name;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})