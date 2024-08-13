import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const KPISchema = new Schema({
  totalProfit: {
    type: mongoose.Types.Currency,
    currency: "USD",
  },
});

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
