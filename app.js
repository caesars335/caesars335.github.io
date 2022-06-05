const express = require('express');
const app = express();
const http = require("http").createServer(app);
// const io = require("socket.io")(http);
const bcrypt = require('bcrypt');
const path = require("path");
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
// const mysql = require('mysql2')
const saltRounds = 10;
// const config = require("./dbConfig")
// const con = mysql.createPool(config);
const bodyParser = require('body-parser');
const fs = require("fs");
const port = 3000;

app.use(express.static('public'));

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

process.on('uncaughtException', function (err) {
    console.log(err);
});

http.listen(port, () => console.info(`App listening on port ${port}`));