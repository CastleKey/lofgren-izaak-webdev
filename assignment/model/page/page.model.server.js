/**
 * Created by izaaklofgren on 8/15/17.
 */


var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');

var pageModel = mongoose.model('PageModel', pageSchema);

// websiteModel.createWebsite = createWebsite;
// websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
// websiteModel.findWebsiteById = findUWebsiteById;
// websiteModel.updateWebsite = updateWebsite;
// websiteModel.deleteWebsite = deleteWebsite;


module.exports = pageModel;