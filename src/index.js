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
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//router
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//listening the server
app.listen(app.get('port'), () => { console.log(`server on port 3000`)} );