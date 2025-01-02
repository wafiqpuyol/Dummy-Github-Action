import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.get("/workflow", (req, res) => {
    res.send("Workflow")
})

app.listen(4000, () => {
    console.log("Server is running on port 3000")
})