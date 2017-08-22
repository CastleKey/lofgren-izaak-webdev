/**
 * Created by izaaklofgren on 8/15/17.
 */

var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model('WebsiteModel', websiteSchema);
var userModel = require("../user/user.model.server");

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesForUser = findWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.updateWebsite = updateWebsite;
// websiteModel.addPage = addPage;
// websiteModel.removePage = removePage;
// websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
// websiteModel.findWebsiteById = findUWebsiteById;
// websiteModel.updateWebsite = updateWebsite;
// websiteModel.deleteWebsite = deleteWebsite;


module.exports = websiteModel;

// function removeWebsite(developerId, websiteId) {
//     return userModel
//         .findById(developerId)
//         .then(function (user) {
//             var index = user.websites.indexOf(websiteId);
//             user.websites.splice(index, 1);
//             return user.save();
//         })
// }
//
// function addWebsite(developerId, websiteId) {
//     return userModel
//         .findById(developerId)
//         .then(function (user) {
//             user.websites.push(websiteId);
//             return user.save();
//         });
// }

function updateWebsite(websiteId, website) {
    return websiteModel.update({_id: websiteId}, {$set: website});
}

function deleteWebsite(developerId, websiteId) {
    return websiteModel
        .remove({_id: websiteId})
        .then(function (status) {
            console.log("Made it to usermodel remove website");
            return userModel.removeWebsite(developerId, websiteId)
        });
}

function findWebsiteById(websiteId) {
    return websiteModel
        .findById(websiteId)
        .populate('pages', 'name');
}

function findWebsitesForUser(developerId) {
    return websiteModel
        .find({developerId: developerId})
        .populate('developerId', 'username')
        .exec();
}

function createWebsite(developerId, website) {
    website.developerId = developerId;
    var websiteTmp = null;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteTmp = websiteDoc;
            return userModel.addWebsite(developerId, websiteDoc._id)
        })
        .then(function (userDoc) {
            return websiteTmp;
        })
}