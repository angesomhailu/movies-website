import mongoose from 'mongoose';
const mongodbUri=process.env.MONGODB_URI as string;
const mongodbName=process.env.MONGODB_NAME as string;
if(!mongodbUri){
    throw new Error("Please define the MONGODB_URI environment variable ");
}
if(!mongodbName){
    throw new Error("Please define the MONGODB_NAME environment variable ");
}
export default async function connectDB(){
   try{
    mongoose.connect(mongodbUri,{dbName:mongodbName});
    console.log("MongoDB connected successfully");
   } 
    catch(err){
     console.log("MongoDB connection failed",err);
    }
}














