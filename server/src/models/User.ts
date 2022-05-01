import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../database/connection";

type UserAttributes = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type UserCreationAttributes = Optional<UserAttributes, "id">;
class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

export default User;