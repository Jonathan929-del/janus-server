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


// Delting building
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Building.findByIdAndDelete(id);
        res.status(200).json('Building deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});


// Editing building
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedBuilding = await Building.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updatedBuilding);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Adding building
router.post('/', async (req, res) => {
    try {
        const building = await Building.create(req.body);
        res.status(201).json(building);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export
export default router;