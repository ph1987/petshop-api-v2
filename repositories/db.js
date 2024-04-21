import 'dotenv/config';
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.CONN_STRING,
  {
    dialect: "postgres",
    define: {
      timestamps: false
    }
  }
)

export default sequelize;