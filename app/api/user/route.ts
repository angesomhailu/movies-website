import { NextRequest, NextResponse } from "next/server";
import {User}  from "@/models/user";

export async function GET () {
    try {
        const fetchUsers = await User.find({})
        return NextResponse.json({ status : 200, data : fetchUsers})
    }catch(err){
        console.log(err); 
        return NextResponse.json({ status : 400, message : "Something went wrong"})
    }

}
export async function POST (req: NextRequest) {
    try {
        const { name,email,password } = await req.json()
        if(!name || !email || !password){
            return NextResponse.json({ status : 400, message : "Name ,email or password not set"})
        } 
        const addUser = new User({
            name : name,
            email : email,
            password : password
        })
        await addUser.save()
        return NextResponse.json({ status : 200, message : "User added"})
    }catch(err){
        console.log(err); 
        return NextResponse.json({ status : 400, message : "Something went wrong"})
    }
}