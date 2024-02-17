import mongoose from "mongoose";

function connect() {

  if (!mongoose.connection) {
    mongoose.connect(process.env.MONGO_URI!)
      .then(() => console.log("Connected to db"))
      .catch(error => console.error(error))
  }
}

export default connect;
