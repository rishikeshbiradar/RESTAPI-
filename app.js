const express = require("express");
const app = express();
const path = require("path")
const PORT = process.env.PORT || 5000;
const courses_router = require("./routes/courses")
const connectDB = require("./db/connect")
require("dotenv").config();

app.use(express.static("Code"))
app.use('/static', express.static("static"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "code/index.html"))
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
