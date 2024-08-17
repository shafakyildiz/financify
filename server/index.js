import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import { kpis, products } from "./data/data.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";

//  CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(async () => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`));

    // // ADD DATA ONE TIME ONLY OR AS NEEDED
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
  })
  .catch((error) => console.log(error));
