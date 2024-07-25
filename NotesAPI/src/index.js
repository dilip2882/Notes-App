const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app = express();

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(5000, ()=>{
    console.log("Server started on port no. 5000");
})

