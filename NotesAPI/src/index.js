const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app = express();

const mongoose = require("mongoose");

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("hello")
})

mongoose.connect("mongodb+srv://dspkids2092:<Y5hRiFKDwKimxCUR>@cluster0.55ozhm0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Server started on port no. 5000");
    })
})
.catch((errror)=>{
    console.log(errror);
});


