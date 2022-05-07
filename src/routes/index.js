const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function route(app) {
    //---------GET------------//

    //hostname/news
    app.use('/news', newsRouter);

    //hostname
    app.use('/', siteRouter);
}

module.exports = route;
