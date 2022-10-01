// Imports
import express from 'express';
const router = express.Router();
import Activities from '../models/Activity.js';


// Fetching activities by component code
router.get('/:id', async (req, res) => {
    try {
        const componentCode = req.params.id;
        const activities = await Activities.find({component:componentCode});
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;