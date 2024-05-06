import { connectDB } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDB()

export async function POST(request: NextRequest) {
    // extract data from token
    const userId = await getDataFromToken(request)
    const user = await User.findOne({_id: userId}).select("-password")

    if (!user) {
        return NextResponse.json({error: "User not found"}, {status: 400})
    }

    return NextResponse.json({
        message: "User fetched successfully",
        success: true,
        data: user,
        status: 200
    })
}
