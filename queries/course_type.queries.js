const db = require("../models/db");

const Course_type = db.course_type;

// Validate that the course type exist to delete/edit/partial edit
const validateCourseType = (courseType) => {
  if(!courseType){
    return res.status(400).json({
      msg : "Bad request",
      status : 400,
      body : "Impossible to find the given data"
    });  
  }
}

// 1. Get all courses
const getAllCoursesType = async (req, res) => {
  try {
    const coursesType = await Course_type.findAll();
    res.json(coursesType);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

// 2. Get a course by ID
const getcourseTypeById = async (req, res) => {
    try {
      const ID = req.params.id
      const getcourseType = await Course_type.findOne(
        {
          where: {
            id : ID
          }
        });
      return res.status(200).json(getcourseType);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  

// 3. Create a new course type
const createCourseType = async (req, res) => {
    try { 
      const courseType = await Course_type.create(req.body);
      return res.json(courseType);
      
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

// 5. Update a course (PUT)
const updatecourseType = async (req, res) => {
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
    const id = req.params.id
    const updatecourseType = await Course_type.update(
      req.body,
      {
        where: {
          id : id
        }
      });
    validateCourseType(updatecourseType);
    return res.status(200).json({
      ok : true,
      status : 200,
      body : updatecourseType
    });
  }
  catch(error){
    return res.status(500).json({ message: error.message,
      status : 500,
      body : "Error updating course"
     });
  }
}


// 6. Delete course
const deletecourseType = async (req, res) => {
  try{
    const ID = req.params.name
    const deleteCourse = await Course.destroy({
      where:{
        id : ID
      }
    });
    validateCourse(deleteCourse);
    return res.status(200).json({
      ok : true,
      status : 200,
      body : deleteCourse
    });
  } catch (error){
    return res.status(500).json({ message: error.message });
  }
}

// 7. Get courses by course name (search with like operator)
const getCoursesBycourseType = async (req, res) => {
  try {
    const TYPE_NAME = req.params.type_name
    const getCourseType = await Course.findAll( { include: [ { model: Course_type, as: 'Course_type' } ] } ,
      {
        where: {
          type_name : TYPE_NAME
        }
      });
    return res.status(200).json({
      ok : true,
      status : 200,
      body : getCourseType
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllCoursesType,
    getcourseTypeById,
    createCourseType,
    updatecourseType,
    deletecourseType,
    getCoursesBycourseType,
}