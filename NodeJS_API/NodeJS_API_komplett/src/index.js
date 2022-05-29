require('dotenv').config();
const config = require('config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./config/logger');
const mongoose = require('mongoose');
mongoose.promise = global.promise;
//Mkchuoq6jprSD9HN
//NodeUser


const port = process.env.PORT || 3000;
//Database connection.
if (!config.has('database')) {
    logger.error('No database config found.');
    process.exit();
}
const { username, password, host } = config.get('database');

mongoose
//.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`, {
    .connect(`mongodb+srv://${username}:${password}@${host}`, {
        useNewURLParser: true,
        useUnifiedTopology: true
    })
    .then( () => logger.info('MongoDB connection has been established successfully.'))
    .catch( err => {
        logger.error(err);
        process.exit();
    })


app.use(morgan('combined', {stream: logger.stream}));

app.use('/images', express.static('./images'));

app.use(express.static('public'));

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.use('/person', require('./controllers/person/person.routes'));

app.use( (err, req, res, next) => {
    console.error(`ERR ${err.statusCode}: ${err.message}`);
    
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});