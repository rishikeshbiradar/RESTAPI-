const Course = require("../models/course")

const getallcourses = async (req, res) => {
    const { Domain, Language, sort, select } = req.query;
    const queryObject = {};

    if (Domain) {
        queryObject.Domain = Domain
    }
    if (Language) {
        queryObject.Language = { $regex: Language, $options: "E" }
    }
    let apiData = Course.find(queryObject)

    if (sort) {
        let sortfix = sort.replace(",", " ");
        apiData = apiData.sort(sortfix)
    }
    if (select) {
        let selectfix = select.split(",").join(" ");
        apiData = apiData.select(selectfix)
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 10
    let skip = (page - 1) * limit
    apiData = apiData.skip(skip).limit(limit)

    const Courses = await apiData
    res.status(200).json({ Courses })
}

const getallcoursestesting = async (req, res) => {
    const Courses = await Course.find(req.query)
    res.status(200).json({ Courses })
}

module.exports = { getallcourses, getallcoursestesting }


// when we want to search by query pass req.query to find method and enter query to link using ? and for multiple query using & 