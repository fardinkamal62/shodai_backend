const api = module.exports

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('../db');

app.use(bodyParser.urlencoded({ extended: false }));

api.installs = async (req) => {
    const body = req.body
    await db.insert({
        buildId: body.buildId,
        registeredAt: new Date(),
    });
}

api.items = async (req, res) => {
    const response = await db.find({ name: { $regex: `${req.query.item}`, $options: "im" } }, 3);
    res.json(response);
}
