// import serverAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/authOptions";

const serverAuth =async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
        throw new Error("User not signed in");
        
    }
    const currentUser = await prismadb.user.findUnique({
        where:{
            email: session.user.email
        }
    });
    if (!currentUser) {
        throw new Error("User not signed in");
    }
    console.log("done");
    
    return { currentUser }
}
export async function GET(request: Request){
    try {
        const session = await getServerSession(authOptions);
        const currentUser = serverAuth();
        return NextResponse.json(session);
    } catch (error) {
        console.log(error);
        return NextResponse.json("Error")
        
    }
}