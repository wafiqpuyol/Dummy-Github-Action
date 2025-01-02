import express from "express"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.post("/getUser", (req, res) => {
    const body = req.body
    console.log(body);
    res.status(201).json(body)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})