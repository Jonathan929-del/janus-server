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


// Deleting property
router.delete('/:id', async (req, res) => {
    try {
        const property_code = req.params.id;
        await Property.deleteOne({property_code});
        res.status(200).json('Property deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});


// Adding property
router.post('/', async (req, res) => {
    try {
        const {
            property_code,
            legal_name,
            name,
            street_address,
            zip_code,
            postal_address,
            district,
            maintenance_area,
            owners,
            address_label,
            administrative_area,
            area_lawn,
            area_plantation,
            area_land,
            area_park,
            area_hard,
            area_water,
            area_parking,
            built_percentage,
            sum_area_bta,
            sum_area_bra,
            sum_area_loa,
            sum_area_ova,
            sum_area_heating,
            sum_area_boa,
            sum_area_bia,
            sum_no_of_apartments,
            listed_buildings,
            municipal_sewage,
            owned_property,
            responsible_user,
            contract_exist,
            contract_includes,
            contract_sum,
            contract_sum_sqm,
            contract_excludes,
            contract_access_to_property,
            contract_code,
            latitude,
            longitude,
            changed_by,
            change_date
        } = req.body;
        const property = await Property.create({
            property_code,
            legal_name,
            name,
            street_address,
            zip_code,
            postal_address,
            district,
            maintenance_area,
            owners,
            address_label,
            administrative_area,
            area_lawn,
            area_plantation,
            area_land,
            area_park,
            area_hard,
            area_water,
            area_parking,
            built_percentage,
            sum_area_bta,
            sum_area_bra,
            sum_area_loa,
            sum_area_ova,
            sum_area_heating,
            sum_area_boa,
            sum_area_bia,
            sum_no_of_apartments,
            listed_buildings,
            municipal_sewage,
            owned_property,
            responsible_user,
            contract_exist,
            contract_includes,
            contract_sum,
            contract_sum_sqm,
            contract_excludes,
            contract_access_to_property,
            contract_code,
            latitude,
            longitude,
            changed_by,
            change_date
        });
        res.status(200).json(property);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
export default router;