var app = require('../../express');

app.post    ('/api/assignment/user/:userId/website', createWebsite);
app.get     ('/api/assignment/user/:userId/website', findWebsitesByUser);
app.get     ('/api/assignment/website/:websiteId', findWebsiteById);
app.put     ('/api/assignment/website/:websiteId', updateWebsite);
app.delete  ('/api/assignment/website/:websiteId', deleteWebsite);

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
    var website = websites.find(function (website) {
        return website._id === websiteId;
    });
    var index = websites.indexOf(website);
    websites.splice(index, 1);
    res.sendStatus(200);
}

function updateWebsite(req, res) {
    var website = req.body;
    var websiteId = req.params['websiteId'];
    for(var w in websites) {
        if(websiteId === websites[w]._id) {
            websites[w] = website;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function createWebsite(req, res) {
    var website = req.body;
    website._id = (new Date()).getTime() + "";
    websites.push(website);
    res.send(website);
}

function findWebsitesByUser(req, res) {
    var resultSet = [];
    //var user = req.body;
    var userId = req.params['userId'];
    for(var w in websites) {
        if(userId === websites[w].developerId) {
            resultSet.push(websites[w]);
        }
    }
    res.send(resultSet);
}

function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    var website = websites.find(function (website) {
        return website._id === websiteId;
    });
    res.send(website);
}
