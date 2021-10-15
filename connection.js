import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGO_ATLAS_PASS}@landkitclone.t2sog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("🚀 Connection successfull");
  });
};

export default connect;
