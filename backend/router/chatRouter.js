const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChat,
  createGroupChat,
  renameChat,
  addGroupChat,
  removefromGroup
} = require("../controller/chatController");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChat);
router.route("/group").post(protect, createGroupChat);
router.route('/rename').put(protect, renameChat);
router.route('/groupremove').put(protect, removefromGroup);
router.route('/groupadd').put(protect, addGroupChat);

module.exports = router;
