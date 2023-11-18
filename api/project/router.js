const express = require('express')
const Project = require('./model')
const { checkProject } = require('./middleware')
const router = express.Router()

router.get('/', async (ereq, res, next) => {
    const data = await Project.get()
    try {
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

router.post('/', checkProject, async (req, res, next) => {
    try {
        const data = await Project.create(req.body)
        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})

module.exports = router
