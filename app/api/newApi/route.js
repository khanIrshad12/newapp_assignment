import axios from "axios";
import { NextResponse } from "next/server";
export const GET = async (req,res) => {
    const page = req.nextUrl.searchParams.get("page") || 1;
    const query=req.nextUrl.searchParams.get("q");
    const limit = 10;
    console.log(query);
    try {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&pageSize=${limit}&page=${page}&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI}`);
        const data = res.data;
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log("Failed to get news data from API", error);
        return NextResponse.json({ error: "Failed to get news data from API" }, { status: 500 });
    }

};