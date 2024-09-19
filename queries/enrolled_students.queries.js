const db = require("../models/db");

const Students = db.enroled_students;

// Validate that the student exist to delete/edit/partial edit
const validateStudent = (student) => {
  if (!student) {
    return res.status(400).json({
      msg: "Bad request",
      status: 400,
      body: "Impossible to find the given data",
    });
  }
};

// 1. Get all students
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

// 2. Get a career by ID
const getCareerById = async (req, res) => {
  try {
    const ID = req.params.id;
    const getCareer = await Careers.findOne({
      where: {
        id: ID,
      },
    });
    return res.status(200).json(getCareer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 3. Enroll a student in a course
const enrolleStudent = async (req, res) => {
  try {
    const studentEnrolled = await Students.create(req.body);
    return res.json(studentEnrolled);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 4. Update a career (PUT)
const updateCareer = async (req, res) => {
  try {
    const keysReq = Object.keys(req.body);
    keysReq.sort();
    const NAME = req.params.id;
    const updateCareer = await Careers.update(req.body, {
      where: {
        name: NAME,
      },
    });
    validateCareer(updateCareer);
    return res.status(200).json(updateCareer);
  } catch (error) {
    return res
      .status(500)
      .json({
        message: error.message,
        status: 500,
        body: "Error updating user",
      });
  }
};

// 5. Delete career by name
const deleteCareerByName = async (req, res) => {
  try {
    const NAME = req.params.name;
    const deleteCareer = await Careers.destroy({
      where: {
        name: NAME,
      },
    });
    validateCareer(deleteCareer);
    return res.status(200).json({ deleteCareer });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 6. Get career by name
const getCareerByName = async (req, res) => {
  try {
    const NAME = req.params.name;
    const getCareer = await Careers.findOne({
      where: {
        nanme: NAME,
      },
    });
    return res.status(200).json({ getCareer });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllStudentsEnroledInACourse,
  enrolleStudent,
};
