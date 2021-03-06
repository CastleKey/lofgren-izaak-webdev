var app = require('../../express');

app.post    ('/api/assignment/website/:websiteId/page', createPage);
app.get     ('/api/assignment/website/:websiteId/page', findPagesByWebsiteId);
app.get     ('/api/assignment/page/:pageId', findPageById);
app.put     ('/api/assignment/page/:pageId', updatePage);
app.delete  ('/api/assignment/page/:pageId', deletePage);

var pages = [
    { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
];

function deletePage(req, res) {
    var pageId = req.params.pageId;
    var page = pages.find(function (page) {
        return page._id === pageId;
    });
    var index = pages.indexOf(page);
    pages.splice(index, 1);
    res.sendStatus(200);
}

function updatePage(req, res) {
    var page = req.body;
    var pageId = req.params['pageId'];
    for(var w in pages) {
        if(pageId === pages[w]._id) {
            pages[w] = page;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function createPage(req, res) {
    var page = req.body;
    page._id = (new Date()).getTime() + "";
    pages.push(page);
    res.send(page);
}

function findPagesByWebsiteId(req, res) {
    var resultSet = [];
    //var user = req.body;
    var websiteId = req.params['websiteId'];
    for(var p in pages) {
        if(websiteId === pages[p].websiteId) {
            resultSet.push(pages[p]);
        }
    }
    res.send(resultSet);
}

function findPageById(req, res) {
    var pageId = req.params['pageId'];
    var page = pages.find(function (page) {
        return page._id === pageId;
    });
    res.send(page);
}
