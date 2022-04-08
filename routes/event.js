const eventsRouter = require('express').Router()
const fetch = require('node-fetch')

// let baseUrl = ''


eventsRouter.get('/', async (req, res) => {
    const events = await fetch(baseUrl).then(response => response.json()).then(response => response)
    res.json(events)
    baseUrl = events.meta.next

})

module.exports = eventsRouter