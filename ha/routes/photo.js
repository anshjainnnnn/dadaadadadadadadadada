const multer = require('multer');
const path = require('path');

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

// Function to handle file upload
const handleFileUpload = (req, res, callback) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error uploading file' });
    }

    callback(req.file); // Pass the uploaded file to the callback function
  });
};

module.exports = handleFileUpload;
