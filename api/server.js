const express = require('express')
const resourcesRouter = require('./resource/router')
const projectsRouter = require('./project/router')
const taskRouter = require('./task/router')
const server = express();

server.use(express.json())

server.use('./api/resources', resourcesRouter)

server.use('/api/projects', projectsRouter)

server.use('/api/task', taskRouter)

server.get('./', (req, res) => {
    res.status(200).json({ message: 'connected to server!' })
})
// selint-disable-next-line no-unused-bars
 
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server