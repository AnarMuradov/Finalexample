import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const productSchema = new Schema({
  name: String,
  price: Number,
});
const productModel = mongoose.model("product", productSchema);

app.get("/", async (req, res) => {
try {
    const products = await productModel.find();
    res.send(products);
} catch (error) {
    console.log(error.message);
}
});

app.get("/:id", async (req, res) => {
 try {
    const { id } = req.params;
    const products = await productModel.findById(id);
    res.send(products);
 } catch (error) {
    console.log(error.message);
 }
});

app.post("/", async (req, res) => {
    try {
        const { name, price } = req.body;
        const NewProducts = new productModel({ name, price });
        await NewProducts.save();
        res.send(NewProducts);
    } catch (error) {
        console.log(error.message);
    }
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
  const { name, price } = req.body;
  const products = await productModel(id, { name, price });
  res.send(products);
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/:id", async (req, res) => {
try {
    const { id } = req.params;
    const products = await productModel.findByIdAndDelete(id);
    res.send("Got a DELETE request at /user");
} catch (error) {
    console.log(error.message);

}
});

mongoose
  .connect("mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
