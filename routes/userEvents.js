const express = require('express')
const router = express.Router()
const UserEvent = require('../models/userEvent')

router.get('/', async (req, res, next) => {
    const events = await UserEvent.find({})
    res.send(events)
})

router.post('/', async (req, res, next) => {
    const newEventData = req.body
    const newEvent = new UserEvent(newEventData)
    await newEvent.save()

    res.send(newEvent)
})

module.exports = router
