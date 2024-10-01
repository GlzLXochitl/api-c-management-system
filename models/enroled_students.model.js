const user = require("./user.model.js"); // importando el modelo user para la llave foranea
const course = require("./course.model.js"); // importando el modelo user para la llave foranea

module.exports = (sequelize, Sequelize) => {
  const EnroledStudents = sequelize.define(
    "enroled_students",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      student_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: user,
          key: "student_id",
        },
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: course,
          key: "id",
        },
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
      tableName: "enroled_students",
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return EnroledStudents;
};
