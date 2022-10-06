// Imports
import mongoose from 'mongoose';


// Schema
const UserSchema = mongoose.Schema({
    user:{type:String},
    password:{type:String},
    name:{type:String},
    operations_area:{type:Number},
    cost_center:{type:Number},
    mobile_phone:{type:Number},
    email:{type:String},
    inactive:{type:String},
    changed_by:{type:String},
    changed_date:{type:Date},
});


// Export
export default mongoose.model('user', UserSchema);