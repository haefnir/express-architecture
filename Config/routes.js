const PeopleController = require('../Controllers/PeopleController')

const routes = app => {
    app.get('/', PeopleController.getPeople)
}

module.exports = routes