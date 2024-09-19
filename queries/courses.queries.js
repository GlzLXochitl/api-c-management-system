const db = require("../models/db");

const Course = db.courses;
const Course_Catalog = db.course_catalog;

// Validate that the employee exist to delete/edit/partial edit
const validateCourse = (course) => {
  if (!course) {
    return res.status(400).json({
      msg: "Bad request",
      status: 400,
      body: "Impossible to find the given data",
    });
  }
};

// 1. Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get a course by ID
const getCourseById = async (req, res) => {
  try {
    const ID = req.params.id;
    const getCourse = await Course.findOne({
      where: {
        id: ID,
      },
    });
    return res.status(200).json(getCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 3. Create a new course
const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    return res.json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 4. Update a course (PUT)
//PUT will also be use for open, close, active or deactivate courses
const updateCourse = async (req, res) => {
  try {
    const keysReq = Object.keys(req.body);
    keysReq.sort();
    //  if(!keysReq.every(isTheSameArray)){
    //      res.status(400).json({
    //        msg : "Bad request",
    //        status : 400,
    //        body : "Missing parameters"
    //      });
    //      return;
    //    }
    const id = req.params.id;
    const updateCourse = await Course.update(req.body, {
      where: {
        id: id,
      },
    });
    validateCourse(updateCourse);
    return res.status(200).json({
      ok: true,
      status: 200,
      body: updateCourse,
    });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: error.message,
        status: 500,
        body: "Error updating course",
      });
  }
};

// 5. Delete course
const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteCourse = await Course.destroy({
      where: {
        id: id,
      },
    });
    validateCourse(deleteCourse);
    return res.status(200).json({
      ok: true,
      status: 200,
      body: deleteCourse,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 6. Get courses by course name (search with like operator)
const getCoursesByCourseName = async (req, res) => {
  try {
    const NAME = req.params.name;
    const getCourse = await Course.findAll({
      include: [
        { model: Course_Catalog, as: "course_catalog", where: { name: NAME } },
      ],
    });
    /*
      const getCourse = await Course.findAll( { include: [ { model: Course_Catalog, as: 'course_catalog', where: { course_name_id : NAME } } ] } ,
      {
        where: {
          course_name_id : NAME
        }
      });
      */
    return res.status(200).json({
      getCourse,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 7. Get courses by coordinator ID
const getCoursesByCoordinatorId = async (req, res) => {
  try {
    const COORDINATOR = req.params.coordinator;
    const getCourse = await Course.findAll({
      where: {
        coordinator_user_id: COORDINATOR,
      },
    });
    return res.status(200).json({
      ok: true,
      status: 200,
      body: getCourse,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 8. Get active or inactive courses
const getActiveCourses = async (req, res) => {
  try {
    const active = req.params.active;
    const getCourse = await Course.findAll({
      where: {
        is_active: active,
      },
    });
    return res.status(200).json(getCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 9. Get active or inactive courses
const getOpenCourses = async (req, res) => {
  try {
    const open = req.params.open;
    const getCourse = await Course.findAll({
      where: {
        is_open: open,
      },
    });
    return res.status(200).json(getCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCoursesByCourseName,
  getCoursesByCoordinatorId,
  getActiveCourses,
  getOpenCourses,
};
