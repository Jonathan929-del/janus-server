// Imports
import express from 'express';
import Activity from '../models/Activity.js';
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const shit = Activity.create({
            date:12
        });
        res.json(shit);
    } catch (err) {
        
    }
});

// Export
export default router;