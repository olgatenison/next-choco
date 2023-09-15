import { NextResponse } from "next/server";
var mydata = require("../../../data/products.json");

export async function GET() {
  return NextResponse.json(mydata.products);
}
