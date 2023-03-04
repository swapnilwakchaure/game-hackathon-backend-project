require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");   

mongoose.set('strictQuery', true)

const { connection } = require("./configs/db.connect");
const { userRouter } = require("./routes/user.route");


const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(fileUpload({
    useTempFiles: true
}));


app.get("/", (request, response) => {
    response.send("Welcome to Game Hackathon Project!");
});

app.use("/users", userRouter);




app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log(`Server is running at port ${process.env.port}`);
    } catch (error) {
        console.log("Cannot able to start the server: ",error);
    }
});