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


// Fetching property by id
router.get('/property-id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const property = await Property.findById(id);
        res.status(200).json(property);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Deleting property
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Property.findByIdAndDelete(id);
        res.status(200).json('Property deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});


// Adding property
router.post('/', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(200).json(property);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Editing property
router.put('/:id', async (req, res) => {
    try {
        const property_code = req.params.id;
        const newProperty = await Property.findOneAndUpdate({property_code}, req.body, {new:true});
        res.status(200).json(newProperty);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;