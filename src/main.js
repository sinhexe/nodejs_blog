const path = require('path')
const express = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
//static files

app.use(express.static(path.join(__dirname,'public')));

//middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger

// app.use(morgan('combined'));

//template engine

app.engine('hbs', engine({
  extname: '.hbs'
})); 
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resource/views')); //config views path

//route

//---------GET------------//

//hostname/
app.get('/', (req, res) => {
  return res.render('home');
});
//hostname/news
app.get('/news', (req, res) => {
  return res.render('news');
});

app.get('/search', (req, res) => {
  return res.render('search');
});

//---------POST------------//

//hostname/search
app.post('/search', (req,res) =>{
  return res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});