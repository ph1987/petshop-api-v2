import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Owner from "./owner.model.js";

const Animal = db.define("animals", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, { underscored: true });

Animal.belongsTo(Owner, { foreignKey: "ownerId" })

export default Animal;