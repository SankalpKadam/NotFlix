import { getSession } from "next-auth/react";
import prismadb from '@/lib/prismadb';
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const serverAuth =async (request:NextApiRequest) => {
    const session = await getSession({req: request});
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

    return { currentUser }
}

export default serverAuth;