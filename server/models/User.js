import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,        
    },
    password: {
        type: String,
        required: true,     
    },
    role: {
        type: String,
        default: 'user'
    },
    favourites: {
        type: [String],
    }
}, {timestamps: true}
);



export default mongoose.model("User", UserSchema);