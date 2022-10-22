// Imports
import mongoose from 'mongoose';


// Schema
const ComponentSchema = mongoose.Schema({
    component_code:{type:String, required:true},
    owners:{type:Number, required:true},
    name:{type:String, required:true},
    other_text:{type:String},
    attendance_text:{type:String},
    maintenance_text:{type:String},
    contracted:{type:String, required:true},
    model:{type:String},
    manufacturer:{type:String},
    installation_date:{type:Number, required:true},
    technical_life_span:{type:Number, required:true},
    reconstruction_year:{type:String},
    other_lastest_date:{type:String},
    other_interval:{type:String},
    other_next_date:{type:String},
    status:{type:Number, required:true},
    status_year:{type:Number, required:true},
    attendance_latest_date:{type:String},
    attendance_interval:{type:String, required:true},
    attendace_next_date:{type:Number},
    maintenance_latest_date:{type:Number},
    maintenance_interval:{type:String, required:true},
    maintenance_next_date:{type:String},
    instruction_text:{type:String},
    remark_text:{type:String},
    attendance_budget_time_min:{type:Number},
    other_budget_time_min:{type:Number},
    maintenance_budget_time_min:{type:Number},
    inspection_mandatory:{type:String},
    inspection_type:{type:String},
    inspection_latest:{type:String},
    inspection_interval:{type:Number},
    inspection_next_date:{type:Number},
    attribute_001:{type:String},
    attribute_002:{type:String},
    attribute_003:{type:String},
    attribute_004:{type:String},
    attribute_005:{type:String},
    attribute_006:{type:String},
    attribute_007:{type:String},
    attribute_008:{type:String},
    attribute_009:{type:String},
    attribute_010:{type:String},
    attribute_011:{type:String},
    attribute_012:{type:String},
    attribute_013:{type:String},
    attribute_014:{type:String},
    attribute_015:{type:String},
    attribute_016:{type:String},
    warranty_expire_date:{type:String},
    warranty_parts:{type:String},
    warranty_notes:{type:String},
    building_code:{type:Number, required:true},
    property_code:{type:Number, required:true},
    position_of_code:{type:String, required:true},
    u_system:{type:String},
    latitude:{type:String},
    longitude:{type:String},
    changed_by:{type:String},
    change_date:{type:String},
});


// Export
export default mongoose.model('components', ComponentSchema);