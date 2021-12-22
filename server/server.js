const express = require("express")

const app = express()
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
 console.log(`connected on ${PORT}`)
})