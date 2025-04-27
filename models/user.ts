import {Schema,models,model} from 'mongoose';
import Email from 'next-auth/providers/email';
import { unique } from 'next/dist/build/utils';
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
    type: String, // Use String for email
    required: true,
    unique: true, // Ensure email is unique
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Add email validation
  },
    password:{
        type:String,
        required:true,
    },
 
});
export const User = models.User || model('User',userSchema);
