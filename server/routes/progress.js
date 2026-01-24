
const express = require('express');
const router = express.Router();
const UserProgress = require('../models/UserProgress');

// GET progress for a user
router.get('/:uid/:saveKey', async (req, res) => {
    try {
        const { uid, saveKey } = req.params;
        const progress = await UserProgress.findOne({ uid, saveKey });

        if (!progress) {
            return res.status(404).json({ message: 'Progress not found' });
        }
        res.json(progress);
    } catch (err) {
        console.error('Error fetching progress:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// POST (Upsert) progress for a user
router.post('/:uid/:saveKey', async (req, res) => {
    try {
        const { uid, saveKey } = req.params;
        const updateData = req.body;

        // Ensure we don't accidentally overwrite the uid/saveKey if passed in body
        delete updateData._id;
        delete updateData.uid;
        delete updateData.saveKey;

        updateData.updatedAt = new Date();

        const progress = await UserProgress.findOneAndUpdate(
            { uid, saveKey },
            { $set: updateData },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        res.json(progress);
    } catch (err) {
        console.error('Error saving progress:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
