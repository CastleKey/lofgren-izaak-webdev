/**
 * Created by izaaklofgren on 8/15/17.
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/webdev_summer2_2017');

userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    websites: [{type: mongoose.Schema.Types.ObjectId, ref:"WebsiteModel"}],
    dateCreated: {type: Date, default: Date.now},
}, {collection: 'users'});

module.exports = userSchema;

//userModel = mongoose.model('userModel', userSchema);