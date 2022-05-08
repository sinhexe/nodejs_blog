const siteRouter = require('./site.route');
const artistRouter = require('./artist.route');

function route(app) {
    //---------GET------------//

    //hostname/artists
    app.use('/artists', artistRouter);
    //hostname
    app.use('/', siteRouter);
}

module.exports = route;
