import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email already exists"],
    },
    name: {
        type: String,
        required:[true, "Please provide a username"],
    },
    image: {
        type: String
    },
    reports:[
        {
            type: Schema.Types.ObjectId,
            ref: "Report",
        },
    ]
    },
    {
        timestamps: true,
    });

    const User = models.User || model("User", UserSchema);
    
    export default User;
