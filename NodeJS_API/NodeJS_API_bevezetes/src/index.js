const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./config/logger');
const mongoose = require('mongoose');
mongoose.promise = global.promise;
//Mkchuoq6jprSD9HN
//NodeUser


const port = 3000;
//Database connection.
mongoose
    .connect('mongodb+srv://NodeUser:Mkchuoq6jprSD9HN@cluster0.w3xne.mongodb.net/?retryWrites=true&w=majority', {
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

app.use('/person', require('./controllers/person/routes'));

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