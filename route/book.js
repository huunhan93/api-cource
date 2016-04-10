/**
 * Created by ASUS on 09/04/2016.
 */
"use strict";

var express = require("express");
var router = express.Router();
var bookController = require("../controller/book");

router.get("/books", bookController.getListBooks);

module.exports = router;