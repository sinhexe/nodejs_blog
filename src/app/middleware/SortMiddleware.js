module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enable: false,
        column: 'defaultCol',
        type: 'default',
    };
    if (req.query.hasOwnProperty('_sort')) {
        console.log(
            'middle ' + res.locals._sort.column + res.locals._sort.type,
        );
        res.locals._sort.enable = true;
        res.locals._sort.type = req.query.type;
        res.locals._sort.column = req.query.column;
    }

    next();
};
