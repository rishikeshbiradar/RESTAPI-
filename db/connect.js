const mongoose = require("mongoose")

const connectDB = (uri) => {
    mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to DB");
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connectDB