import express from "express"

import bodyParser from "body-parser"
import catchPrex from "@middlewares/catch-prex"

import userRouter from "@routes/user"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use("/api", userRouter)

app.use(catchPrex)

app.listen(5000, () => {
    console.log("app is running on port 5000")
})
