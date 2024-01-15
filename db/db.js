const mongoose = require('mongoose');
require('dotenv').config({path : './configs/.env'});

mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${process.env.MONGO_CONNECTION_STRING}`);
});

db.on('disconnected', () => {
    console.log(`Disconnected from MongoDB at ${process.env.MONGO_CONNECTION_STRING}`);
});

db.on('error', (error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
});

module.exports = db;
