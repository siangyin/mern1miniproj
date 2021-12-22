const express = require("express")
const app = express()
const PORT = process.env.PORT || 3030;
const mongoose = require("mongoose")
require("dotenv").config()

// DATABASE CONNECTION

function connectDB(url) {
 return mongoose.connect(url).then(() => {
 console.log("CONNECT TO MONGODB...")
}).catch(err=>console.log(err))
}

async function start() {
 try {
  await connectDB(process.env.MONGO_URL)
  app.listen(PORT, () => { console.log(`Server listening on ${PORT}...`) });
 } catch (err) {
  console.log(err)
 }
}

start();