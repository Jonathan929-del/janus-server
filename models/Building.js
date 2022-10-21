// Imports
import mongoose from 'mongoose';


// Schema
const BuildingSchema = mongoose.Schema({
    building_code:{type:Number},
    name:{type:String},
    street_address:{type:String},
    construction_year:{type:String},
    total_rent:{type:Number},
    area_boa:{type:Number},
    area_bia:{type:Number},
    area_bta:{type:Number},
    area_bra:{type:Number},
    area_loa:{type:Number},
    area_ova:{type:Number},
    area_parking_space:{type:Number},
    let_area_percent:{type:Number},
    no_of_floors:{type:Number},
    no_of_apartments:{type:Number},
    area_heating:{type:Number},
    owner:{type:String},
    area_tak_yta:{type:Number},
    area_fasad_yta:{type:Number},
    listed_building:{type:String},
    u_operation_type:{type:String},
    u_facade:{type:String},
    u_windows:{type:String},
    u_entrance:{type:String},
    u_roof:{type:String},
    u_foundation:{type:String},
    u_electricity:{type:String},
    u_ventilation:{type:String},
    u_heating:{type:String},
    u_heat_dist:{type:String},
    miscellaneous:{type:String},
    u_elevator:{type:String},
    responsible_user:{type:String},
    property_code:{type:Number},
    latitude:{type:String},
    longitude:{type:String},
    changed_by:{type:String},
    change_by:{type:Number}
});


// Export
export default mongoose.model('buildings', BuildingSchema);