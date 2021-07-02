var express = require("express");
var app = express();
var router = express.Router();
const CartItem = require("../models/cartItem");
const asyncHandler = require("../middleware/async");

const {
  fetchAllCartItems,
  addCartItems,
  deleteCartItemById,
  delCartItems,
  patchCartItems,
  patchAmount
} = require("../controllers/cartItem");

const advancedFind = require("../middleware/advancedFind");

router
  .route("/:email")
  .get(fetchAllCartItems)
  .post(addCartItems);

router.delete("/:email", delCartItems);

router.patch("/:email", patchCartItems);
router.patch("/:email/amount", patchAmount);

module.exports = router;
