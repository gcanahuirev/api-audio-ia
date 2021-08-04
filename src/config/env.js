import { config } from "dotenv";

config();
const ENV = process.env;

// Server
export const PORT = ENV.PORT || 3000;
export const NODE_ENV = ENV.NODE_ENV || "development";
