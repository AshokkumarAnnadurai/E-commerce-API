import express from "express";
import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRoute from "./routes/productRoute";
import categoryRoute from "./routes/categoriesRoute";
import cors from "cors";

const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 5000;
const mongodbUrl = process.env.mongodbUrl;

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);

app.get("/api/health", (req, res) => {
  res.send({ status: "healthy" });
});

app.listen(PORT, () =>
  console.log(
    "************************************************** \n The Server has started at : http://localhost:5000"
  )
);
