const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const createAdminAccount = require('./script/admin');
const signRouter = require('./routes/signup');
const loginRoute = require('./routes/login');

const app = express();
const PORT = 4500;

app.use(cors());
app.use(bodyParser.json());
app.use('/user', signRouter);
app.use('/user', loginRoute);

// Multer storage configuration
const storage = multer.diskStorage({
  destination: './uploads',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Multer upload configuration
const upload = multer({
  storage: storage
}).single('photo'); // 'photo' should match the name attribute in your form

// Route for handling file upload
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error uploading file' });
    }

    const photo = req.file.filename; // Multer will add 'filename' to req.file

    // Optionally, save the uploaded file info to database or perform other actions

    res.json({ message: 'File uploaded successfully', filename: photo });
  });
});
createAdminAccount();

app.listen(PORT, () => {
  console.log(`Server is Running on: http://localhost:${PORT}`);
});
