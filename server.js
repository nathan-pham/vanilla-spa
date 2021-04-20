const express = require("express")
const path = require("path")

const app = express()

app.use("/static", express.static(path.resolve(__dirname, "static")))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("static", "index.html"))
})

app.listen(8080, () => {
    console.log("server is live")
})