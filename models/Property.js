// Imports
import mongoose from 'mongoose';


// Schema
const PropertySchema = mongoose.Schema({
    property_code:{type:Number, required:true},
    legal_name:{type:String, required:true},
    name:{type:String, required:true},
    street_address:{type:String, required:true},
    zip_code:{type:String, required:true},
    postal_address:{type:String, required:true},
    district:{type:String},
    maintenance_area:{type:String, required:true},
    owners:{type:Number, required:true},
    address_label:{type:String, required:true},
    administrative_area:{type:String, required:true},
    area_lawn:{type:Number, required:true},
    area_plantation:{type:Number, required:true},
    area_land:{type:Number, required:true},
    area_park:{type:Number, required:true},
    area_hard:{type:Number, required:true},
    area_water:{type:Number, required:true},
    area_parking:{type:Number, required:true},
    built_percentage:{type:Number, required:true},
    sum_area_bta:{type:Number, required:true},
    sum_area_bra:{type:Number, required:true},
    sum_area_loa:{type:Number, required:true},
    sum_area_ova:{type:Number, required:true},
    sum_area_heating:{type:Number, required:true},
    sum_area_boa:{type:Number, required:true},
    sum_area_bia:{type:Number, required:true},
    sum_no_of_apartments:{type:Number, required:true},
    listed_buildings:{type:String},
    municipal_sewage:{type:String},
    owned_property:{type:String},
    responsible_user:{type:String},
    contract_exist:{type:String},
    contract_includes:{type:String},
    contract_sum:{type:Number, required:true},
    contract_sum_sqm:{type:Number, required:true},
    contract_excludes:{type:Number, required:true},
    contract_access_to_property:{type:String},
    contract_code:{type:String},
    latitude:{type:String},
    longitude:{type:String},
    changed_by:{type:String, required:true},
    change_date:{type:Number, required:true}
});


// Export
export default mongoose.model('properties', PropertySchema);