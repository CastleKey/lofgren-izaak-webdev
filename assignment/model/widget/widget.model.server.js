/**
 * Created by izaaklofgren on 8/15/17.
 */

var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');

var widgetModel = mongoose.model('WidgetModel', widgetSchema);

// websiteModel.createWebsite = createWebsite;
// websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
// websiteModel.findWebsiteById = findUWebsiteById;
// websiteModel.updateWebsite = updateWebsite;
// websiteModel.deleteWebsite = deleteWebsite;


module.exports = widgetModel;