const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("credits", "root", "", {
  dialect: "mariadb",
  host: "localhost", // Replace with your database host if different
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const db = {};

db.sequelize = sequelize; //acceso a la libreria
db.sequelize = Sequelize; //acceso a la instancia

db.courses = require("./course.model.js")(sequelize, Sequelize);
db.user_type = require("./user_type.model.js")(sequelize, Sequelize);
db.course_catalog = require("./course_catalog.model.js")(sequelize, Sequelize);
db.course_type = require("./course_type.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.enroled_students = require("./enroled_students.model.js")(
  sequelize,
  Sequelize
);
db.career = require("./career_catalog.model.js")(sequelize, Sequelize);

//db.course_catalog.hasMany(db.courses, { foreignKey: 'course_name_id' });
db.courses.belongsTo(db.course_catalog, { foreignKey: "course_name_id" });
db.courses.belongsTo(db.users, { foreignKey: "coordinator_user_id" });

//db.users.hasMany(db.courses, { foreignKey: 'user_id' });
//db.courses.belongsTo(db.users, { foreignKey: 'user_id' });

//db.course_catalog.hasMany(db.courses);
//db.courses.belongsTo(db.course_catalog);

module.exports = db;
