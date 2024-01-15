import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "dpg-cmiamsed3nmc73cifang-a",
  username: "postgres",
  password: "tQD10xpeRCufrUGFyUNMLcOiUmz7t0hb",
  port: 5432,
  database: "holaflydb",
  entities: [User],
  logging: true,
  synchronize: true,
});
