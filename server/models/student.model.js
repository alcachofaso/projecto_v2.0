'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    lastname: String,
    attorney: [{
        attorneyId: {type: Schema.ObjectId, ref: 'School'}
    }],
    schools: [{
        schoolId: {type: Schema.ObjectId, ref: 'School'}
    }]
});

module.exports = mongoose.model('User', UserSchema);