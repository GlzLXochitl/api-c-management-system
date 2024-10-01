const db = require("../models/db");

const Students = db.enroled_students;

// Get all students
const getAllStudentsEnroledInACourse = async (req, res) => {
  try {
    const COURSE_ID = req.params.course_id;
    const students = await Students.findAll({
      where: {
        course_id: COURSE_ID,
      },
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST Enroll a student in a course
const enrolleStudent = async (req, res) => {
  try {
    const studentEnrolled = await Students.create(req.body);
    return res.json(studentEnrolled);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Validate that the student exist to delete/edit/partial edit
/*const validateStudent = (student) => {
  if (!student) {
    return res.status(400).json({
      msg: "Bad request",
      status: 400,
      body: "Impossible to find the given data",
    });
  }
};*/

module.exports = {
  getAllStudentsEnroledInACourse,
  enrolleStudent,
};
