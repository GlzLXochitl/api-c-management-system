const db = require("../models/db");

const Careers = db.career;

// Validate that the career exist to delete/edit/partial edit
const validateCareer = (career) => {
  if (!career) {
    return res.status(400).json({
      msg: "Bad request",
      status: 400,
      body: "Impossible to find the given data",
    });
  }
};

// 1. Get all careers
const getAllCareers = async (req, res) => {
  try {
    const career = await Careers.findAll();
    res.json(career);
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

// 3. Create a new career POST
const createCareer = async (req, res) => {
  try {
    const career = await Careers.create(req.body);
    return res.json(career);
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
  getAllCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareerByName,
  getCareerByName,
};
