import express from "express";
import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRoute from "./routes/productRoute";

const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 5000;
const mongodbUrl = "mongodb+srv://AshokkumarAnnadurai:Ashok@8220!@e-commerce.sethm.mongodb.net/?retryWrites=true&w=majority&appName=E-commerce"

mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());
app.use("/api/products", productRoute);

// Serve static assests if in production

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.get('/api/health', (req, res) => {
    res.send({ status: 'healthy' });
});

app.listen(PORT, () =>
    console.log(
        "************************************************** \n The Server has started at : http://localhost:5000"
    )
);
