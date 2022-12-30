// Imports
import express from 'express';
const router = express.Router();
import cloudinaryV from '../utils/cloudinary.js';


// Uploading image
router.post('/', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const img = await cloudinaryV.uploader.upload(fileStr, {upload_preset:'janus', public_id:req.body.id});
        res.status(201).json(img);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Fetching images
router.get('/', async (req, res) => {
    try {
        const images = await cloudinaryV.search
        .expression('folder:janus')
        .sort_by('public_id', 'desc')
        .max_results(100)
        .execute();
    res.status(200).json(images);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;