// Imports
import express from 'express';
import Buildings from '../../client/components/Buildings.js';
const router = express.Router();


// Fetching buildings by property id
router.get('/:id', async (req, res) => {
    try {
        const propertyId = req.params.id;
        const buildings = await Buildings.find({propertyCode:propertyId});
        res.status(200).json(buildings);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;