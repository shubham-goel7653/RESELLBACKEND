const express = require('express')
const router = express.Router()
const controller = require('../Controllers/first_controller')
const middleware = require('../MiddleWare/middleware')

router.post('/firstController',controller.firstApi)

router.post('/secondController',middleware.middleware,controller.secondApi)


router.post('/thirdController',controller.thirdApi)


module.exports = router