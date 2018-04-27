'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GradeSchema = Schema({
    name: String,
    level: String,
    teachers: [{
        teacherId: [{ type: Schema.ObjectId, ref: 'User' }]
    }],
    students: [{ 
       studentId: [{ type: Schema.ObjectId, ref: 'User' }]
    }],
    subjects: [{ 
        subjectId: [{ type: Schema.ObjectId, ref: 'Subject' }]
    }]
});

module.exports = mongoose.model('Grade', GradeSchema);