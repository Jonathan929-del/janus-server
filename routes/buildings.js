// Imports
import express from 'express';
import Building from '../models/Building.js';
const router = express.Router();


// Fetching buildings by property id
router.get('/:id', async (req, res) => {
    try {
        const propertyId = req.params.id;
        const buildings = await Building.find({property_code:propertyId});
        res.status(200).json(buildings);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Fetching building by id
router.get('/building-id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const building = await Building.findById(id);
        res.status(200).json(building);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;