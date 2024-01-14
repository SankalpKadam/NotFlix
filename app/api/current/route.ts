import serverAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


export async function GET(request: NextApiRequest){
    try {
        const currentUser =serverAuth(request);
        return NextResponse.json(currentUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json("Error")
        
    }
}