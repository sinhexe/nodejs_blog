const siteRouter = require('./site.route');
const artistRouter = require('./artist.route');
const meRouter = require('./me.router');

function route(app) {
    //---------GET------------//

    //hostname/artists
    app.use('/artists', artistRouter);
    //hostname/me
    app.use('/me', meRouter);
    //hostname
    app.use('/', siteRouter);
}

module.exports = route;
