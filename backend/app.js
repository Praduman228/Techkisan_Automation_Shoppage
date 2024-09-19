const express = require("express")
const app = express()
const indexRouter=require("./routes/indexRoutes")

app.use("/",indexRouter)


app.listen(8000);
