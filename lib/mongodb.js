import { MongoClient } from "mongodb";

const uri = "your-mongodb-connection-string";

const client = new MongoClient(uri);

export async function connectDB() {
  await client.connect();
  return client.db("companyDB");
}

// =========================================
async function handleSubmit(e){
  e.preventDefault();

  const res = await fetch("/api/contact",{
    method:"POST",
    body:JSON.stringify({
      name:"Priya",
      email:"test@gmail.com"
    })
  })

}