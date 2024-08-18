declare module "mongoose-currency" {
  import mongoose from "mongoose";

  // Extend the Mongoose Schema Types with Currency
  export function loadType(mongoose: typeof mongoose): void;

  export class Currency extends mongoose.SchemaType {
    constructor(key: string, options: any);
    cast(val: any): number;
  }
}
