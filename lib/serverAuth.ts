import { getSession } from "next-auth/react";
import prismadb from '@/lib/prismadb';
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";

const serverAuth =async (request:Request) => {

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