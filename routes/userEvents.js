const express = require('express')
const router = express.Router()
const UserEvent = require('../models/userEvent')

router.get('/', async (req, res, next) => {
    const events = await UserEvent.find({})
    res.send(events)
})

router.get('/:id', async (req, res, next) => {
    id = req.params.id
    const eventObj = await UserEvent.findOne({ _id: id })
    if (eventObj) {
        res.status(200)
        return res.send(eventObj)
    }
    res.status(404)
    return res.send()
})

router.put('/:id', async (req, res, next) => {
    id = req.params.id
    const updatedEventData = req.body

    const resEvent = await UserEvent.updateOne({ _id: id }, updatedEventData)

    return res.send([resEvent, await UserEvent.findById(id)])
})

router.delete('/:id', async (req, res, next) => {
    id = req.params.id

    const resEvent = await UserEvent.deleteOne({ _id: id })

    return res.send(resEvent)
})

router.post('/', async (req, res, next) => {
    const newEventData = req.body
    const newEvent = new UserEvent(newEventData)
    await newEvent.save()

    res.send(newEvent)
})

module.exports = router
