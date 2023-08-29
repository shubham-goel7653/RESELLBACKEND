const express = require('express')
const router = express.Router()
const controller = require('../Controllers/first_controller')

router.post('/firstController',controller.firstApi)

module.exports = router