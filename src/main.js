const path = require('path')
const express = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
//static files

app.use(express.static(path.join(__dirname,'public')));

//HTTP logger

app.use(morgan('combined'));

//template

app.engine('hbs', engine({
  extname: '.hbs'
})); 
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resource/views')); //config views path

//route

app.get('/', (req, res) => {
  return res.render('home');
});

app.get('/news', (req, res) => {
  return res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});