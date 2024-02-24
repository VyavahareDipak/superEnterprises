const express = require("express");
const router = express.Router() ;

const {addOrder}  = require("../controllers/orderControllers")
const {deleteOrder}  = require("../controllers/orderControllers")
const {updateOrder}  = require("../controllers/orderControllers")

const {auth} = require("../middlewares/auth")
router.post("/add/order",auth,addOrder);
router.post("/delete/order",auth,deleteOrder);
router.post("/update/order",auth,updateOrder);

module.exports = router ;