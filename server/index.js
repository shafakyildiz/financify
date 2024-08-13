import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import { kpis } from "./data/data.js";
import KPI from "./models/KPI.js";
import kpiRoutes from "./routes/kpi.js";

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

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(async () => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`));

    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
  })
  .catch((error) => console.log(error));
