const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected ✅");
    return client.db("student_portal");
  } catch (error) {
    console.error("Database Error:", error);
  }
}

module.exports = connectDB;