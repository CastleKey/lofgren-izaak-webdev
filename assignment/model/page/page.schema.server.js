/**
 * Created by izaaklofgren on 8/15/17.
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/webdev_summer2_2017');

pageSchema = mongoose.Schema({
    _website: [{type: mongoose.Schema.Types.ObjectId, ref:"WebsiteModel"}],
    name: String,
    title: String,
    description: String,
    widgets: {type: mongoose.Schema.Types.ObjectId, ref:"WidgetModel"},
    dateCreated: {type: Date, default: Date.now},
}, {collection: 'pages'});

module.exports = pageSchema;

pageModel = mongoose.model('PageModel', pageSchema);