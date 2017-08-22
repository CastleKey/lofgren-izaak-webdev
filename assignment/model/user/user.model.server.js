/**
 * Created by izaaklofgren on 8/15/17.
 */

var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('UserModel', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.addWebsite = addWebsite;
userModel.removeWebsite = removeWebsite;


module.exports = userModel;

function removeWebsite(developerId, websiteId) {
    console.log("made it to remove website");
    return userModel
        .findById(developerId)
        .then(function (user) {
            console.log("made it to splicing2");
            //user.websites.pull(websiteId);
            var index = user.websites.indexOf(websiteId);
            console.log("made it to splicing");
            user.websites.splice(index, 1);
            return user.save();
        });
}

function addWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            user.websites.push(websiteId);
            console.log("Made it to add website after push");
            return user.save();
        });
}

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel
        .findById(userId)
        .populate('websites', 'name');
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
    return userModel.update({_id: userId}, {$set: user});
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}