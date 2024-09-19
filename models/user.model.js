const UserType = require("./user_type.model.js"); // Importando el modelo user_type para la llave foranea

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: UserType,
          key: "id",
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      student_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      career: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "career_catalog",
          key: "id",
        },
      },
      term: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      credits: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "user",
    }
  );
  return User;
};
