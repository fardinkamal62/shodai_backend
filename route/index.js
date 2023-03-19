const route = module.exports

const express = require("express");
route.router = express.Router();

const api = require('../api')

route.router.route('/installs').post(api.installs);
route.router.route('/items').get(api.items);