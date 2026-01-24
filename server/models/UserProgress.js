
const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
        // unique: true  <-- REMOVED: access caused multiple modes to fail
    },
    saveKey: {
        type: String,
        required: true
    },
    chapterIdx: {
        type: Number,
        default: 0
    },
    levelIdx: {
        type: Number,
        default: 0
    },
    unlocked: {
        type: Map,
        of: Boolean,
        default: {}
    },
    coins: {
        type: Number,
        default: 0
    },
    userName: {
        type: String,
        default: null
    },
    certificateId: {
        type: String,
        default: null
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Compound index to ensure unique combo of user + save slot
UserProgressSchema.index({ uid: 1, saveKey: 1 }, { unique: true });

module.exports = mongoose.model('UserProgress', UserProgressSchema);
