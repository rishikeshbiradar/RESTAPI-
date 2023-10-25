require("dotenv").config();
const connectDB = require("./db/connect")
const Course = require("./models/course")
const courseJson = require("./courses.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        await Course.deleteMany();
        await Course.create(courseJson)
    } catch (error) {
        console.log(error)
    }
}

start();