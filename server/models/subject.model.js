'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubjectSchema = Schema({
    name: String,
    teachers: [{
        teacherId: [{ type: Schema.ObjectId, ref: 'User' }]
    }],
    grades:[{
        gradeId: [{ type: Schema.ObjectId, ref: 'Grade' }]
    }]
});

module.exports = mongoose.model('Subject', SubjectSchema);