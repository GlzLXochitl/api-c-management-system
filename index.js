const express = require("express"); //import express
const app = express(); // create an express app

const bodyParser = require("body-parser"); // is a middleware that allows you to handle the data that is sent to the server
app.use(bodyParser.json()); // use the body-parser middleware

const cors = require("cors");
app.use(cors());

const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCoursesByCourseName,
  getCoursesByCoordinatorId,
  getActiveCourses,
  getOpenCourses,
} = require("./queries/courses.queries.js");
const {
  getAllCoursesName,
  getCourseNameById,
  getCourseByName,
  createCourseName,
  updateCourseName,
  deleteCourseName,
  getCoursesNames,
} = require("./queries/course_catalog.queries.js");
const {
  getAllCoursesType,
  getcourseTypeById,
  createCourseType,
  updatecourseType,
  deletecourseType,
} = require("./queries/course_type.queries.js");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserByEmail,
  getUserByEmail,
  getUserByStudentID,
  authUser,
  getUserByUserType,
} = require("./queries/user.queries.js");
const {
  getAllCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareerByName,
  getCareerByName,
} = require("./queries/career.queries.js");
const {
  getAllStudentsEnroledInACourse,
  enrolleStudent,
} = require("./queries/enrolled_students.queries.js");

/**
 * @swagger
 * components:
 *  schemas:
 *    Courses:
 *      type: object
 *       properties:
 *         coordinator_user_id:
 *            type: integer
 *            description: Person who  teaches the curse
 *         quarter_id:
 *            type:integer
 *            description:
 *         course_name_id:
 *            type:integer
 *            description:catalog courses
 *         schedule:
 *            type:string
 *            description:It's the course's schedule
 *         is_active:
 *            type:tinyint
 *            description:
 *         credits_obtained:
 *            type:integer
 *            description:
 *         is_open:
 *            type:tinyint
 *            description:
 *        :
 */

// Endpoints for courses ******************

// 1- Get all courses
app.get("/api/getCourses", (req, res) => {
  getAllCourses(req, res);
});

// 2- Get a course by ID
app.get("/api/courses/:id", (req, res) => {
  getCourseById(req, res);
});

// 3- Post a new course
app.post("/api/courses", (req, res) => {
  createCourse(req, res);
});

// 4- PUT update a course
// PUT will also be use for open, close, active or deactivate courses, it is not necessary to add the whole fields
app.put("/api/courses/:id", (req, res) => {
  updateCourse(req, res);
});

// 5- DELETE a course
app.delete("/api/courses/:id", (req, res) => {
  deleteCourse(req, res);
});

// 6- Get a course by Name
app.get("/api/coursesByName/:name", (req, res) => {
  getCoursesByCourseName(req, res);
});

// 7- Get a course by Coordinator
app.get("/api/courses_coordinator/:coordinator", (req, res) => {
  getCoursesByCoordinatorId(req, res);
});

// 8- Get active or inactive courses (0/1)
app.get("/api/active_courses/:active", (req, res) => {
  getActiveCourses(req, res);
});

// 9- Get open or closed courses (0/1)
app.get("/api/open_courses/:open", (req, res) => {
  getOpenCourses(req, res);
});

// 10- Get all courses names
app.get("/api/courses_names/:active", (req, res) => {
  getCoursesNames(req, res);
});
// Endpoints for course_catalog ***************

//Get all courses names
app.get("/api/courses_name", (req, res) => {
  getAllCoursesName(req, res);
});

// Get a course name by ID
app.get("/api/courses_name_id/:id", (req, res) => {
  getCourseNameById(req, res);
});

// Get a course by name
app.get("/api/courses_name/:name", (req, res) => {
  getCourseByName(req, res);
});

// Post a new course name
app.post("/api/course_name", (req, res) => {
  createCourseName(req, res);
});

// PUT update a course (replace entire course)
app.put("/api/courses_name/:id", (req, res) => {
  updateCourseName(req, res);
});

// DELETE a course
app.delete("/api/courses_name/:id", (req, res) => {
  deleteCourseName(req, res);
});

// Endpoints for course_type ******************

//Get all courses type
app.get("/api/courses_type", (req, res) => {
  getAllCoursesType(req, res);
});

// Get a course by ID
app.get("/api/courses_type_id/:id", (req, res) => {
  getcourseTypeById(req, res);
});

// Post a new course
app.post("/api/courses_type", (req, res) => {
  createCourseType(req, res);
});

// PUT update a course (replace entire course)
app.put("/api/courses_type/:id", (req, res) => {
  updatecourseType(req, res);
});

// DELETE a course
app.delete("/api/courses_type/:id", (req, res) => {
  deletecourseType(req, res);
});

// Endpoints for users ******************

//Get all users
app.get("/api/users", (req, res) => {
  getAllUsers(req, res);
});

// Get a user by ID
app.get("/api/user/:id", (req, res) => {
  getUserById(req, res);
});

// Get an user by email
app.get("/api/userEmail/:email", (req, res) => {
  getUserByEmail(req, res);
});

// Get a student by student id (matricula)
app.get("/api/userStudentId/:student_id", (req, res) => {
  getUserByStudentID(req, res);
});

// Post a new user
app.post("/api/newUser", (req, res) => {
  createUser(req, res);
});

// PUT update an user
app.put("/api/updateUser/:id", (req, res) => {
  updateUser(req, res);
});

// DELETE an user by email
app.delete("/api/userEmail/:email", (req, res) => {
  deleteUserByEmail(req, res);
});

// Auth user with email and password
app.post("/api/userAuth", (req, res) => {
  authUser(req, res);
});

// Get user by userType
app.get("/api/userType/:user_type_id", (req, res) => {
  getUserByUserType(req, res);
});

// Endpoints for careers ******************

//Get all careers
app.get("/api/careers", (req, res) => {
  getAllCareers(req, res);
});

// Get a career by ID
app.get("/api/career/:id", (req, res) => {
  getCareerById(req, res);
});

// Get a career by name
app.get("/api/careerName/:name", (req, res) => {
  getCareerByName(req, res);
});

// Post a new career
app.post("/api/newCareer", (req, res) => {
  createCareer(req, res);
});

// PUT update a career by name
app.put("/api/updateCareer/:name", (req, res) => {
  updateCareer(req, res);
});

// DELETE an user by name
app.delete("/api/careerName/:name", (req, res) => {
  deleteCareerByName(req, res);
});

// Endpoints for enroled_students ******************

//Get all students enroled in a course
app.get("/api/students_enroled_in_a_course/:course_id", (req, res) => {
  getAllStudentsEnroledInACourse(req, res);
});

// Post a new student enroled in a course
app.post("/api/enrolleStudent", (req, res) => {
  enrolleStudent(req, res);
});

// Start the server
const port = process.env.PORT || 3001; // Use environment variable for port or default to 3000
app.listen(port, () => console.log(`Server listening on port ${port}`));
