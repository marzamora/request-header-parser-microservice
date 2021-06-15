const controller = require('./controller')

module.exports = (app) => {
    app.route('/api')
        .get(controller.default)
}