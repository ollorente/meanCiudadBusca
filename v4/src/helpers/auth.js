const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'No autorizado');
    res.json({'error': 'No autorizado'});
};

module.exports = helpers;