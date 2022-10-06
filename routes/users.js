// Imports
import express from 'express';
import User from '../models/User.js';
const router = express.Router();


// Fetching user
router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;