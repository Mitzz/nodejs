const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
  console.log('In add-product middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In root-url middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

const PORT_NO = 3000;
app.listen(PORT_NO);