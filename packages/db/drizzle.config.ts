import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });
// console.log("hheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
// console.log(process.env);

const uri = [
  "mysql://",
  process.env.DB_USERNAME,
  ":",
  process.env.DB_PASSWORD,
  "@",
  process.env.DB_HOST,
  ":",
  process.env.DB_PORT,
  "/",
  process.env.DB_NAME,
  // '?ssl={"rejectUnauthorized":true}',
].join("");
// console.log(uri);

export default {
  schema: "./src/schema",
  driver: "mysql2",
  dbCredentials: { uri },
  tablesFilter: ["t3turbo_*"],
} satisfies Config;
