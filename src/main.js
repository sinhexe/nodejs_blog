const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const db = require('./config/db/index');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
//connect to mongodb

db.connect();

//routes
const route = require('./routes/index');

//static files

app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger

// app.use(morgan('combined'));

//template engine

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views')); //config views path

//route init

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
