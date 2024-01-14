import serverAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";


export async function GET(request: Request){
    try {
        const session = await getServerSession(authOptions);
        // const currentUser =serverAuth(request);
        return NextResponse.json(session);
    } catch (error) {
        console.log(error);
        return NextResponse.json("Error")
        
    }
}