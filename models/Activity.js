// Imports
import mongoose from 'mongoose';


// Schema
const ActivitySchema = mongoose.Schema({
    date:{type:Date},
    user:{type:String},
    description:{type:String},
    activity:{type:String},
    work_order:{type:String},
    time:{type:String},
    article_number:{type:Number},
    quantaty:{type:Number},
    remark:{type:String},
    time_minutes:{type:Number},
    material_coast:{type:Number},
    longitude:{type:String},
    latitude:{type:String},
    building:{type:Number},
    property:{type:Number},
    component:{type:String},
    unique_index_component:{type:String},
    changed_by:{type:String},
    change_date:{type:Number},
    img:{type:String}
});


// Export
export default mongoose.model('activities', ActivitySchema);