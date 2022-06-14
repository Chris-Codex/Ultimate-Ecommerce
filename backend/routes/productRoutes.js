const express = require("express");
const router = express.router();

//@desc GET all products from db
//@route GET /api/products
//@access public
router.get("/", (req, res) => {});

//@desc GET a products by id from db
//@route GET /api/products/:id
//@access public
router.get("/:id", (req, res) => {});

module.exports = router;
