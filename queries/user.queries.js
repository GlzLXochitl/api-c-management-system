const db = require("../models/db");

const Course = db.courses;
const Users = db.users;

// Validate that the user exist to delete/edit/partial edit
const validateUser = (user) => {
  if (!user) {
    return res.status(400).json({
      msg: "Bad request",
      status: 400,
      body: "Impossible to find the given data",
    });
  }
};

// 1. Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get a user by ID
const getUserById = async (req, res) => {
  try {
    const ID = req.params.id;
    const getUser = await Users.findOne({
      where: {
        id: ID,
      },
    });
    return res.status(200).json(getUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 3. Create a new user
const createUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 4. Update an user (PUT)
const updateUser = async (req, res) => {
  try {
    const keysReq = Object.keys(req.body);
    keysReq.sort();
    const id = req.params.id;
    const updateUser = await Users.update(req.body, {
      where: {
        id: id,
      },
    });
    validateUser(updateUser);
    return res.status(200).json(updateUser);
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

// 5. Delete user by email
const deleteUserByEmail = async (req, res) => {
  try {
    const EMAIL = req.params.email;
    const deleteUser = await Users.destroy({
      where: {
        email: EMAIL,
      },
    });
    validateUser(deleteUser);
    return res.status(200).json({ deleteUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 6. Get user by email
const getUserByEmail = async (req, res) => {
  try {
    const EMAIL = req.params.email;
    const getUser = await Users.findOne(req.body, {
      where: {
        email: EMAIL,
      },
    });
    return res.status(200).json({ getUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 7. Get user by student_id, it will only works with the users with the role student
const getUserByStudentID = async (req, res) => {
  try {
    const STUDENT_ID = req.params.student_id;
    const getUser = await Users.findOne({
      where: {
        student_id: STUDENT_ID,
      },
    });
    return res.status(200).json(getUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 8. Auth user with email and password
const authUser = async (req, res) => {
  try {
    const EMAIL = req.body.email;
    const PASSWORD = req.body.password;
    const getUser = await Users.findOne({
      where: {
        email: EMAIL,
      },
    });
    return getUser.password === PASSWORD
      ? res
          .status(200)
          .json({
            login: true,
            userType: getUser.user_type_id,
            userID: getUser.id,
          })
      : res.status(200).json({ login: false });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 9. Get user by userType, it will only works with the users with the role student
const getUserByUserType = async (req, res) => {
  try {
    const USER_TYPE = req.params.user_type_id;
    const getUser = await Users.findAll({
      where: {
        user_type_id: USER_TYPE,
      },
    });
    return res.status(200).json(getUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserByEmail,
  getUserByEmail,
  getUserByStudentID,
  authUser,
  getUserByUserType,
};
