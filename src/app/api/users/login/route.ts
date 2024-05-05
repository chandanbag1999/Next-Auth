import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connectDB()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        // validation
        console.log(reqBody);

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        console.log("user exists");

        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error: "check your credentials"}, {status: 400})
        }

        const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({message: "Login successful", success: true}, {status: 200})
        
        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}