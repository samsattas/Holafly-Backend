import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "monorail.proxy.rlwy.net",
  //host: "localhost",
  username: "postgres",
  password: "eC326edFc-E*32fC53a*5C13-3afFBCG",
  //password: "postgres",
  port: 49650,
  database: "railway",
  entities: [User],
  logging: true,
  synchronize: true,
});
