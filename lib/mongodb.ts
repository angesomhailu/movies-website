import mongoose from 'mongoose'

const mongodbUri= process.env.MONGODB_URI;
const mongodbName= process.env.MONGODB_NAME;
if (!mongodbUri) {
    throw new Error (" please define mongo environment variable")
}
if (!mongodbName) {
    throw new Error (" please define mongo environment variable")
}
 const connectDB = async()=>{
    try{
        await mongoose.connect(mongodbUri, {
            dbName: mongodbName,
            
        });

        console.log("MongoDB connected")

    }
    catch (error) {
        console.log("MongoDB connection error", error);
    }
}

export default connectDB;