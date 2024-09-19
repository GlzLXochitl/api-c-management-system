module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define(
    "course",
    {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      coordinator_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      quarter_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "quarter_catalog",
          key: "id",
        },
      },
      course_name_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "course_catalog",
          key: "id",
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      schedule: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      credits_obtained: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      course_img: {
        type: Sequelize.STRING,
      },
      is_open: {
        type: Sequelize.TINYINT,
        allowNull: false,
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
      tableName: "courses",
    }
  );
  //course_catalog.hasMany(course, { foreignKey: 'course_name_id' });
  //course.belongsTo(course_catalog, { foreignKey: 'authorId' });
  return Course;
};
