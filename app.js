const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const courses_router = require("./routes/courses")
const connectDB = require("./db/connect")
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Hello All");
})

app.use("/api/courses", courses_router)

const start = async () => {
    try {
        connectDB(process.env.MONGODB_URI)
        app.listen(PORT, () => {
            console.log(`server is started on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();