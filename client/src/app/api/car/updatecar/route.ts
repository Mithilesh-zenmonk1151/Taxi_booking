import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function PUT(request: NextRequest) {
  try {
    console.log("helloii");
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/car`
    );
    console.log("getting tests", res.data);
    if (!res) {
      alert("getting test failed");
      return;
    }
    return NextResponse.json(res.data);
  } catch (error: any) {
    console.log(error);
    console.log("error occurred during getting test");
  }
}











