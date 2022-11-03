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


// Fetching components by component code
router.get('/component/:id', async (req, res) => {
    try {
        const componentId = req.params.id;
        const component = await Component.findOne({component_code:componentId});
        res.status(200).json(component);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Fetching components by component id
router.get('/component-id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const component = await Component.findById(id);
        res.status(200).json(component);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Deleting component
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Component.findByIdAndDelete(id);
        res.status(200).json('Component deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});


// Editing component by id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedComponent = await Component.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updatedComponent);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Editing component by component code
router.put('/component-code/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedComponent = await Component.findOneAndUpdate({component_code:id}, req.body, {new:true});
        res.status(200).json(updatedComponent);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;