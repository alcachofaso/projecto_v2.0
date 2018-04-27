'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchoolSchema = Schema({
    name: String,
    personnel: [{
        schoolAdmin: [{ type: Schema.ObjectId, ref: 'User' }],
        teachers: [{ type: Schema.ObjectId, ref: 'User' }],
        psychologist: [{ type: Schema.ObjectId, ref: 'User' }],
        psychopedagogue: [{ type: Schema.ObjectId, ref: 'User' }]
    }],
    students: [{
       studentId: [{ type: Schema.ObjectId, ref: 'Student' }]
    }],
    grades: [{ type: Schema.ObjectId, ref: 'Grade' }],
    logo: String
});

module.exports = mongoose.model('School', SchoolSchema);