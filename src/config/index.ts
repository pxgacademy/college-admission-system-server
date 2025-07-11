import { config } from "dotenv";
config();

interface EnvConfig {
  port: string;
  mongo_url: string;
  node_env: string;
}

export const env_config: EnvConfig = {
  port: process.env.PORT || "5000",
  mongo_url: process.env.MONGODB_URL as string,
  node_env: process.env.NODE_ENV || "development",
};
