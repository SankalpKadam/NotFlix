import { NextResponse } from "next/server";
import prismadb from '@/lib/prismadb';
import brcypt from 'bcrypt';
export async function POST(request: Request) {
    try {
        const {email, userName, password} = await request.json();
        const existingUser = await prismadb.user.findUnique({
            where:{
                email: email,

            }
        });

        if (existingUser) {
            return NextResponse.json("Email already taken")
        }

        const hashedPassword = await brcypt.hash(password, 12);
        const user = await prismadb.user.create({
            data:{
                email,
                name:userName,
                hashedPassword,
                image:'',
                emailVerified: new Date(),
            }
        });
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json("Error registering user")
    }
}