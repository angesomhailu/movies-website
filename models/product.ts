import {Schema,models,model} from 'mongoose';
const productSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
 
});
export const Product = models.Product || model('Product',productSchema);
