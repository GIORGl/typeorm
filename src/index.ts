import { createConnection } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "databasesql",
      database: "typeorm",
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });

    console.log("Connected to postgres!");
  } catch (error) {
    console.log("Unable to connect to postgres!");
    throw new Error(error);
  }
};

main();
