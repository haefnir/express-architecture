const DbService = require('../Services/DbService')
const PeopleService = require('../Services/PeopleService')

const getPeople = async (req, res) => {
    const db = await DbService.getDb()
    const data = await PeopleService.getAllPeople(db)
    res.json(data)
}

module.exports.getPeople = getPeople