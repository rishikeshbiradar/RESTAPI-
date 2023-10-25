const express = require("express")
const router = express.Router()
const { getallcourses, getallcoursestesting } = require("../controllers/courses")

router.route("/").get(getallcourses)
router.route("/testing").get(getallcoursestesting)

module.exports = router