// Imports
import express from 'express';
const router = express.Router();
import Component from '../models/Component.js';
import Notification from '../models/Notification.js';


// Fetching components with notifications component codes
router.get('/', async (req, res) => {
    try {
        const notifications = await Notification.find();
        const components = await Promise.all(notifications.map(notification => {
            return Component.find({component_code:notification.component_code});
        }));
        res.status(200).json(components);
    } catch (err) {
        res.status(500).json(err.message);
    }
});


// Deleting notification
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Notification.findByIdAndDelete(id);
        res.status(200).json('Notification deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;