var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var cursoSchema = require('./schemas/cursoSchema.js');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://admin:admin@ds051740.mongolab.com:51740/compraventa', function (error) {
    if (error) {
        console.log(error);
    }
});
