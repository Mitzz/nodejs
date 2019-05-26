const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const noteRoutes = require('./routes/notes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/notes', noteRoutes);

app.listen(3001);
