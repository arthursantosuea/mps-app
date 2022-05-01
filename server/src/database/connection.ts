import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  `${process.env.POSTGRES_DATABASE}`,
  `${process.env.POSTGRES_USERNAME}`,
  `${process.env.POSTGRES_PASSWORD}`,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default sequelize;
