// Imports
import mongoose from 'mongoose';


// Schema
const ActivitySchema = mongoose.Schema({
    date:{type:Number},
    user:{type:String},
    description:{type:String},
    cause:{type:Number},
    work_order:{type:String},
    time:{type:String},
    article_number:{type:Number},
    quantaty:{type:Number},
    remark:{type:String},
    time_minutes:{type:Number},
    material_coast:{type:Number},
    longitude:{type:String},
    latitude:{type:String},
    building_code:{type:Number},
    property_code:{type:Number},
    component_code:{type:String},
    unique_index_component:{type:String},
    changed_by:{type:String},
    change_date:{type:Number}
});


// Export
export default mongoose.model('activities', ActivitySchema);