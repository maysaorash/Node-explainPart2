const mongoose = require("mongoose");
module.exports = () => {
  mongoose.connect(
    "mongodb+srv://maysaorash:nHrAg2sVrtv69AT@cluster0.nmkzg.mongodb.net/newusers?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  mongoose.connection.on("open", () => {
    console.log("MongoDB: Conncted Success");
  });
  mongoose.connection.on("error", (err) => {
    console.log("MongoDB: Conncted Failed:",err);
  });
};
