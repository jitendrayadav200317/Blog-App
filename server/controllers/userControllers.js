import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
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
    const token = jwt.sign({ is: user._id, name: user.name }, "this-is-strng", {
      expiresIn: "1d",
    });
    res.cookis("coolie",{
      httpOnly:true,
    });
    res.status(200).json({
      message:"login message",
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

    if ((!email, !password, !name)) {
      return res.status(400).json({
        message: "please the file",
      });
    }
    const user = await User.findOne({ email }); // check if user is already register
    if (user) {
      return res.status(404).json({
        message: "User is already register plase login",
      });
    }
    const hashedPasword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name, password: hashedPasword, email }); //register newUser
    res.status(201).json({
      data: newUser,
      massage: "successfully register",
    });
  } catch (error) {
    return res.status(500).json({
      message: "save error",
      error: message.error,
    });
  }
};
