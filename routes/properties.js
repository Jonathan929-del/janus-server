// Imports
import express from 'express';
const router = express.Router();
import Property from '../models/Property.js'


// Fetching Properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Fetching property by id
router.get('/:id', async (req, res) => {
    try {
        const latitude = req.params.id;
        const property = await Property.findOne({latitude});
        res.status(200).json(property);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;