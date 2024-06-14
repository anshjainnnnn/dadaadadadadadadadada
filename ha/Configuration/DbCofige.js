const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this line is included to load the .env file

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    throw new Error('MongoDB connection URI is not defined');
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error(`Error: ${err}`);
});

module.exports = mongoose;
