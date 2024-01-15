const express = require("express");
const {getAppHealth} = require("../controllers/contollers.app");
const appRouter = express.Router()

appRouter.get('/api/health', getAppHealth)

module.exports = appRouter
