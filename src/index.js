const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');



//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//middlewares
app.use(morgan('dev'))
 
app.use(express.urlencoded({extended: false}))

//router
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.use((req, res) => {
     res.status(404).end(`<h1>404 NOT FOUND<h1>`)
});
//listening the server
app.listen(app.get('port'), () => {
     console.log('server on port', app.get('port'))});