import { getSession } from "next-auth/react";
import prismadb from '@/lib/prismadb';
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

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

    return { currentUser }
}

export default serverAuth;