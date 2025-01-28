const mongoose = require('mongoose');
const profileSchema=new mongoose.Schema({
    user_fields:{
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        roles:{
            type:[String],
        }
    },
    profile_fields:{
        firstName:{
            type:String,
            required:false
        },
        lastName:{
            type:String,
            required:false
        },
        age:{
            type:Number,
            required:false
        }
    },
    activityTracker:{
        lastLogin:{
            type: Date,
        }
    }
});
module.exports = mongoose.model('Profile', profileSchema);
