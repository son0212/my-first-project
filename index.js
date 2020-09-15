const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const useragent = require('express-useragent');
require('dotenv').config();

mongoose.connect(process.env.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

var main = require('./router/main.js');
var auth = require('./auth/auth.sessionId.js');

const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));
app.use(useragent.express());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(''));

app.use('/',auth,main);

var port = process.env.PORT || 212;

app.listen(port,()=>{
	console.log(`The server has been started at the port:${port} or http://localhost:${port}`);
});
