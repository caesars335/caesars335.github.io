const express = require('express');
const app = express();
const http = require("http").createServer(app);
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('public'));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/thai', (req, res) => {
    res.render('thai');
});

process.on('uncaughtException', function (err) {
    console.log(err);
});

http.listen(port, () => console.info(`App listening on port ${port}`));