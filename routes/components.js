// Imports
import express from 'express';
import Component from '../models/Component.js';
const router = express.Router();


// Fetching components by building id
router.get('/:id', async (req, res) => {
    try {
        const buildingId = req.params.id;
        const components = await Component.find({building_code:buildingId});
        res.status(200).json(components);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;