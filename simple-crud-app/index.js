const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("hellow cuy");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

mongoose
  .connect(
    "mongodb+srv://dincuy23:xliniOy7zf4nYoOg@simplecrudapp.1xq4quc.mongodb.net/CRUD-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("sukses koneksi ke mongodb");
    app.listen(3000, () => console.log("server berjalan pada port 3000"));
  });
