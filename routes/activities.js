// Imports
import express from 'express';
const router = express.Router();
import Activity from '../models/Activity.js';


// Fetching activities by component code
router.get('/:id', async (req, res) => {
    try {
        const componentCode = req.params.id;
        const activities = await Activity.find({component:componentCode});
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Fetching activity by id
router.get('/activity/:id', async (req, res) => {
    try {
        const activityId = req.params.id;
        const activity = await Activity.findById(activityId);
        res.status(200).json(activity);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Posting activity
router.post('/', async (req, res) => {
    try {
        const activity = await Activity.create({
            date:req.body.date,
            user:req.body.user,
            description:req.body.description,
            activity:req.body.activity,
            work_order:req.body.work_order,
            time:req.body.time,
            article_number:req.body.article_number,
            quantaty:req.body.quantaty,
            remark:req.body.remark,
            time_minutes:req.body.time_minutes,
            material_coast:req.body.material_coast,
            longitude:req.body.longitude,
            latitude:req.body.latitude,
            building:req.body.building,
            property:req.body.property,
            component:req.body.component,
            unique_index_component:req.body.unique_index_component,
            changed_by:req.body.changed_by,
            change_date:req.body.change_date
        });
        res.status(201).json(activity);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;