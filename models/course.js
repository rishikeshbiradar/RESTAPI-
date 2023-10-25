const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    Course_Name: {
        type: String,
        default:"Web Development"
    },
    Platform : {
        type: String,
        default:"Udemy"
    },
    Domain: {
        type: String,
        default:"Web Development"
    },
    Star_Rating: {
        type: Number,
        default:4.2
    },
    Duration: {
        type: String,
        default:"Not Known"
    },
    Reviews: {
        type: Number,
        default:0
    },
    Views: {
        type: Number,
        default:0
    },
    Certificate: {
        type: String,
        default:"No"
    },
    Language: {
        type: String,
        default:"Hindi"
    },
    Paid: {
        type: String,
        default:"No"
    },
    Instructor: {
        type: String,
        default:"Unknown"
    },
    Link: {
        type: String,
        default:"No Link"
    },
    Images: {
        type: String,
        default:"Image Not Found"
    },
    Description: {
        type: String,
        default:"No More Data"
    },
    Hosted_By: {
        type: String,
        default:"Unkonwn Source"
    },
});

module.exports=mongoose.model('Course',courseSchema)