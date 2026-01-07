import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "user is not register, plase register and login",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "password is not match",
      });
    }
    const token = jwt.sign({ id: user._id, name: user.name,user:user.email }, "this-is-strng", {
      expiresIn: "1d",
    });
    res.cookie("token",token,{
      httpOnly:true,
    });
    res.status(200).json({
      message:"login successfull",
    })
  } catch (error) {
    return res.status(500).json({
      message: "saver error",
      error: message.error,
    });
  }
};

export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body; //fatch data

    const user = await User.findOne({ email }); // check if user is already register
    if (user) {
      return res.status(404).json({
        message: "User is already register plase login",
      });
    }
    const hashedPasword = await bcrypt.hash(password, 12); // password hashed

    const newUser = await User.create({ name, password: hashedPasword, email }); //register newUser
    res.status(201).json({
      data: newUser,
      massage: "successfully register",
    });
  } catch (error) {
  return res.status(500).json({
    message: "server error",
    error: error.message,
  });
}

};
