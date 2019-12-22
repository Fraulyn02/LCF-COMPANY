const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//middlewares

//router
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening the server
app.listen(app.get('port'), () => { console.log(`server on port 3000`)} );