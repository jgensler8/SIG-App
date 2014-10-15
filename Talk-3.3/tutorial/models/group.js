var mongoose = require('mongoose');

var Group = mongoose.model('Group',
                           { name: {
                                 type: String,
                                 required: true,
                                 index: true
                             },
                             interests: [String],
                             meetingTime: Date,
                             nickname: {
                                 type: String,
                                 unique: true
                             },
                             numMembers: {
                                 type: Number,
                                 default: 0
                             }
                          });

module.exports = Group;
