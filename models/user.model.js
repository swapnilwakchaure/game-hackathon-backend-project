const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    avatar: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String }
}, {
    versionKey: false
});



const UserModel = mongoose.model("user", userSchema);



module.exports = { UserModel };