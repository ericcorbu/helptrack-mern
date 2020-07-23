const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const requests = require('./routes/api/requests');

const app = express();

app.use(bodyParser.json());

const mongoURI = "mongodb+srv://helptrack:development@cluster0.znrck.mongodb.net/helptrack?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

const router = express.Router();

app.use('/', express.static('frontend/build'));

app.use('/api/requests', requests);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));