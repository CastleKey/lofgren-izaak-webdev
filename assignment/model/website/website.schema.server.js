/**
 * Created by izaaklofgren on 8/15/17.
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/webdev_summer2_2017');

websiteSchema = mongoose.Schema({
    name: String,
    description: String,
    developerId: [{type: mongoose.Schema.Types.ObjectId, ref:"UserModel"}],
    pages: [{type: mongoose.Schema.Types.ObjectId, ref:"PageModel"}],
    dateCreated: {type: Date, default: Date.now},
}, {collection: "websites"});

module.exports = websiteSchema;

//websiteModel = mongoose.model('WebsiteModel', websiteSchema);