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


// Fetching property by latitude
router.get('/:id', async (req, res) => {
    try {
        const latitude = req.params.id;
        const property = await Property.findOne({latitude});
        res.status(200).json(property);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Fetching property by property code
router.get('/property-code/:id', async (req, res) => {
    try {
        const property_code = req.params.id;
        const property = await Property.findOne({property_code});
        res.status(200).json(property);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;