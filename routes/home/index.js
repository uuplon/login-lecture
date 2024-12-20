"use strict";

const express = require("express");
const routers = express.Router();

const ctrl = require("./home.ctrl");

routers.get("/", ctrl.hello);

routers.get("/login", ctrl.login);

module.exports = routers;
