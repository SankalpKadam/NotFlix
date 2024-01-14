import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

const API_KEY = "6b0f9afb1bfdfce0451a81d57eb564bc";
const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`
}

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    
    const result= await axios.get(requests.fetchTrending);
    return res.status(200).json({id:"1"})
}