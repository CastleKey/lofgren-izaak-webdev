var app = require('../../express');

app.post    ('/api/assignment/page/:pageId/widget', createWidget);
app.get     ('/api/assignment/page/:pageId/widget', findWidgetsByPageId);
app.get     ('/api/assignment/widget/:widgetId', findWidgetById);
app.put     ('/api/assignment/widget/:widgetId', updateWidget);
app.delete  ('/api/assignment/widget/:widgetId', deleteWidget);

// The post for uploading files


var multer = require('multer'); // npm install multer --save
var upload = multer({ dest: __dirname+'/../../public/uploads' });

app.post    ('/api/upload', upload.single('myFile'), uploadImage);

var widgets = [
    { _id: "123", widgetType: "HEADING",    pageId: "321", size: 2, text: "GIZMODO"},
    { _id: "234", widgetType: "HEADING",    pageId: "321", size: 4, text: "Lorem ipsum"},
    { _id: "345", widgetType: "IMAGE",      pageId: "321", width: "100%",
        url: "http://lorempixel.com/400/200/"},
    { _id: "456", widgetType: "HTML",       pageId: "321", text: "<p>Lorem ipsum</p>"},
    { _id: "567", widgetType: "HEADING",    pageId: "321", size: 4, text: "Lorem ipsum"},
    { _id: "678", widgetType: "YOUTUBE",    pageId: "321", width: "100%",
        url: "https://www.youtube.com/embed/SNggmeilXDQ" },
    { _id: "789", widgetType: "HTML",       pageId: "321", text: "<p>Lorem ipsum</p>"}
];

// Uploading image function
function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId        = req.body.userId;
    var websiteId     = req.body.websiteId;
    var pageId        = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    //var widget        = findWidgetById(widgetId);
    var widget = {
        widgetType: "IMAGE",
        width: "100%",
        pageId: pageId

    };
    widget._id = (new Date()).getTime() + "";
    widget.url        = '/uploads/' + filename;
    widgets.push(widget);

    var callbackUrl   = "/assignment/index.html#/user/" + userId + "/website/"+ websiteId + "/page/" + pageId + "/widget";

    res.redirect(callbackUrl);
}


function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    var widget = widgets.find(function (widget) {
        return widget._id === widgetId;
    });
    var index = widgets.indexOf(widget);
    widgets.splice(index, 1);
    res.sendStatus(200);
}

function updateWidget(req, res) {
    var widget = req.body;
    var widgetId = req.params['widgetId'];
    for(var w in widgets) {
        if(widgetId === widgets[w]._id) {
            widgets[w] = widget;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function createWidget(req, res) {
    var widget = req.body;
    widget._id = (new Date()).getTime() + "";
    widgets.push(widget);
    res.send(widget);
}

function findWidgetsByPageId(req, res) {
    var resultSet = [];
    //var user = req.body;
    var pageId = req.params['pageId'];
    for(var w in widgets) {
        if(pageId === widgets[w].pageId) {
            resultSet.push(widgets[w]);
        }
    }
    res.send(resultSet);
}

function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = widgets.find(function (widget) {
        return widget._id === widgetId;
    });
    res.send(widget);
}