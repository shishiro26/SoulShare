const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

let connectionURI =
  "mongodb+srv://dheeravathshishiro:djalokkmtpy@cluster0.wzg5q4y.mongodb.net/Soulshare?retryWrites=true&w=majority";

console.log('Connecting to DB...');
mongoose
  .connect(connectionURI)
  .then(() => {
    console.log(`Successfully connected to ${connectionURI}`);
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (_, res) => {
  res.json({ message: "Welcome to OnTheMoons Backend" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 server at http://localhost:${PORT}.`);
});