const path = require('path');


// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/client/build')));
require('./config')(app);



const allRoutes = require('./routes');
app.use('/api', allRoutes);


const index = require('./routes/index');
app.use('/', index);

const mongooseTest = require('./routes/mongooseTest');
app.use('/test', mongooseTest);

const gifs = require('./routes/gifs');
app.use('/gifs', gifs)


require('./error-handling')(app);


module.exports = app;

