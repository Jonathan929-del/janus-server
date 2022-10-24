// Imports
import mongoose from 'mongoose';


// Schema
const PropertySchema = mongoose.Schema({
    property_code:{type:String},
    legal_name:{type:String},
    name:{type:String},
    street_address:{type:String},
    zip_code:{type:String},
    postal_address:{type:String},
    district:{type:String},
    maintenance_area:{type:String},
    owners:{type:Number},
    address_label:{type:String},
    administrative_area:{type:String},
    area_lawn:{type:Number},
    area_plantation:{type:Number},
    area_land:{type:Number},
    area_park:{type:Number},
    area_hard:{type:Number},
    area_water:{type:Number},
    area_parking:{type:Number},
    built_percentage:{type:Number},
    sum_area_bta:{type:Number},
    sum_area_bra:{type:Number},
    sum_area_loa:{type:Number},
    sum_area_ova:{type:Number},
    sum_area_heating:{type:Number},
    sum_area_boa:{type:Number},
    sum_area_bia:{type:Number},
    sum_no_of_apartments:{type:Number},
    listed_buildings:{type:String},
    municipal_sewage:{type:String},
    owned_property:{type:String},
    responsible_user:{type:String},
    contract_exist:{type:String},
    contract_includes:{type:String},
    contract_sum:{type:Number},
    contract_sum_sqm:{type:Number},
    contract_excludes:{type:Number},
    contract_access_to_property:{type:String},
    contract_code:{type:String},
    latitude:{type:String},
    longitude:{type:String},
    changed_by:{type:String},
    change_date:{type:Number}
});


// Export
export default mongoose.model('properties', PropertySchema);