import { NextResponse } from "next/server";
import {User}  from "@/models/user";
import bcrypt from "bcrypt";
import connectDB from '@/lib/mongodb';

export async function POST (request: Request) {
    const { name,email,password,confirmPasword } = await request.json()
            if(!name || !email || !password || !confirmPasword){
                return NextResponse.json({ status : 400, message : "Name ,email or password not set"})
            } 
            if(password !== confirmPasword){
                return NextResponse.json({ status : 400, message : "Password not match"})
            }
            if(password.length < 6){
                return NextResponse.json({ status : 400, message : "Password should be at least 6 characters"})
            }
    try {
        await connectDB();
        const checkUser = await User.findOne({ email : email })
        if(checkUser){
            return NextResponse.json({ status : 400, message : "User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const addUser = new User({
            name : name,
            email : email,
            password : hashedPassword
        })
        await addUser.save()
        return NextResponse.json({ status : 200, message : "User added"})
    }catch(err){
        console.log(err); 
        return NextResponse.json({ status : 400, message : "Something went wrong"})
    }
}