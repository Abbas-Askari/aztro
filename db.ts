import mongoose from "mongoose";

async function connect() {
  // if (!mongoose.connection) {
  console.log(process.env.MONGO_URI)
  console.log("Tryping to connect.")
  await mongoose.connect(process.env.MONGO_URI!)
  console.log("Connected to db")
  // }
}

export default connect;
