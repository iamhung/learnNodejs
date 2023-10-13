const express = require('express');
const userRoutes = require('./user.routes.js');
const router = express.Router()

// /**
//  * @openapi
//  * /ping:
//  *  get:
//  *     tags:
//  *     - Ping
//  *     description: Returns API operational status
//  *     responses:
//  *       200:
//  *         description: API is  running
//  */
// router.get('/ping', (req, res) => res.sendStatus(200))

// router.use(userRoutes);

router.use(userRoutes);

module.exports = router;