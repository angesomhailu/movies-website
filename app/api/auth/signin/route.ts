// import { NextRequest, NextResponse } from "next/server";
// import {Product}  from "@/models/product";


// export async function GET () {
//     try {
//         const fetchProducts = await Product.find({})
//         return NextResponse.json({ status : 200, data : fetchProducts})
//     }catch(err){
//         console.log(err); 
//         return NextResponse.json({ status : 400, message : "Something went wrong"})
//     }

// }
// export async function POST (req: NextRequest) {
//     try {
//         const { name, price } = await req.json();
//         if(!name || !price){
//             return NextResponse.json({ status : 400, message : "Name or price not set"});
//         } 
//         const addProduct = new Product({
//             name : name, 
//             price : price
//         })
//         await addProduct.save()
//         return NextResponse.json({ status : 200, message : "Product added"});
//     }catch(err){
//         console.log(err); 
//         return NextResponse.json({ status : 400, message : "Something went wrong"});
//     }
// }