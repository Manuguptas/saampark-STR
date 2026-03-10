import { connectDB } from "@/lib/mongodb";

export async function POST(req) {

  const body = await req.json();
  const db = await connectDB();

  await db.collection("contacts").insertOne(body);

  return Response.json({
    message: "Data saved successfully"
  });

}