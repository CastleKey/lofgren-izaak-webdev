var app = require('../../express');
var websiteModel = require('../model/website/website.model.server');
var userModel = require('../model/user/user.model.server');

app.post    ('/api/assignment/user/:userId/website', createWebsite);
app.get     ('/api/assignment/user/:userId/website', findWebsitesByUser);
app.get     ('/api/assignment/website/:websiteId', findWebsiteById);
app.put     ('/api/assignment/website/:websiteId', updateWebsite);
app.delete  ('/api/assignment/user/:userId/website/:websiteId', deleteWebsite);

var websites = [
    { _id: "123", name: "Facebook",    developerId: "456", description: "Facebook Lorem" },
    { _id: "234", name: "Tweeter",     developerId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo",     developerId: "456", description: "Lorem" },
    { _id: "890", name: "Go",          developerId: "123", description: "Lorem" },
    { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    { _id: "678", name: "Checkers",    developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess",       developerId: "234", description: "Lorem" }
];

function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var developerId = req.params.userId;

    websiteModel
        .deleteWebsite(developerId, websiteId)
        .then(function (status) {
            res.json(status);
        });

    // websiteModel
    //     .findWebsiteById(websiteId)
    //     .then(function (website) {
    //         developerId = website.developerId;
    //     });
    //
    // // var website = websites.find(function (website) {
    // //     return website._id === websiteId;
    // // });
    // //var developerId = website.developerId;
    //
    //
    // websiteModel
    //     .deleteWebsite(developerId, websiteId)
    //     .then(function (status) {
    //         res.sendStatus(200);
    //     });
    // var index = websites.indexOf(website);
    // websites.splice(index, 1);
    // res.sendStatus(200);
}

function updateWebsite(req, res) {
    var website = req.body;
    var websiteId = req.params['websiteId'];

    websiteModel
        .updateWebsite(websiteId, website)
        .then(function (website) {
            res.sendStatus(200);
        }, function (err) {
            res.sendStatus(404);
        });
    // for(var w in websites) {
    //     if(websiteId === websites[w]._id) {
    //         websites[w] = website;
    //         res.sendStatus(200);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}

function createWebsite(req, res) {
    var website = req.body;
    var developerId = website.developerId;

    websiteModel
        .createWebsite(developerId, website)
        .then(function (website) {
            res.json(website);
        });
    // website._id = (new Date()).getTime() + "";
    // websites.push(website);
    // res.send(website);
}

function findWebsitesByUser(req, res) {
    //var resultSet = [];
    //var user = req.body;
    var userId = req.params['userId'];
    //findWebsitesForUser(developerId)
    websiteModel
        .findWebsitesForUser(userId)
        .then(function (websites) {
            res.json(websites);
        })
    // for(var w in websites) {
    //     if(userId === websites[w].developerId) {
    //         resultSet.push(websites[w]);
    //     }
    // }
    // res.send(resultSet);
}

function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    websiteModel
        .findWebsiteById(websiteId)
        .then(function (website) {
            res.json(website);
        })
    // var website = websites.find(function (website) {
    //     return website._id === websiteId;
    // });
    // res.send(website);
}
