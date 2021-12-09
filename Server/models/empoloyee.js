const mongoose = require('mongoose');
const Joi = require('joi');

const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dateofbirth:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
})
const Employee = mongoose.model("employee", employeeSchema)

const validator = (data) =>{
    const schema = Joi.object({
        name:Joi.string().required(),
        dateofbirth:Joi.string().required(),
        gender:Joi.string().required(),
        salary:Joi.string().length(5).regex(/^\d+$/).message({"string.pattern.base":"please enter valid  number"})
        .required()
    })
    return schema.validate(data);
};
module.exports={Employee, validator};
