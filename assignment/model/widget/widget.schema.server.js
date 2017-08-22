/**
 * Created by izaaklofgren on 8/15/17.
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/webdev_summer2_2017');

widgetSchema = mongoose.Schema({
    _page: [{type: mongoose.Schema.Types.ObjectId, ref:"WebsiteModel"}],
    type: [{type: String, enum:["YOUTUBE", "IMAGE", "HEADING", "HTML"]}], //enum
    name: String,
    text: String,
    placeholder: String,
    description: String,
    url: String,
    width: String,
    height: String,
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    dateCreated: {type: Date, default: Date.now},
}, {collection: 'widgets'});

module.exports = widgetSchema;

widgetModel = mongoose.model('WidgetModel', widgetSchema);