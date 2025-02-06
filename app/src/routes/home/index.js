"use strict";

const express = require("express");
const routers = express.Router();

const ctrl = require("./home.ctrl");

routers.get("/", ctrl.output.home);
routers.get("/login", ctrl.output.login);
routers.get("/register", ctrl.output.register);
routers.post("/login", ctrl.process.login);

module.exports = routers;
