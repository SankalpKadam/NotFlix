import instance from "../axiosinstance";
import requests from "../requests";
import { NextResponse } from "next/server";




export async function GET(request: Request) {
    try {
        
        const result= await instance.get(requests.fetchDocumentaries);
        return NextResponse.json(result.data.results)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({test:"asdf"})
    }
}