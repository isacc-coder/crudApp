
import mongoose from 'mongoose';
import mongo from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
const infoSchema = mongoose.Schema({
    name:String,
    dateofbirth:String,
    gender:String,
    salary:Number,
 
    
});


autoIncrement.initialize(mongoose.connection);
infoSchema.plugin(autoIncrement.plugin, "Info");


const info = mongoose.model("Info", infoSchema);


export default info;








