import * as dotenv from 'dotenv'
dotenv.config()
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import Usermodel from "../model/User";


const Signup = async (req, res) => {
  try {
    const user = await Usermodel.findOne({ email: req.body.name });
    if(user){
      res.json({
        message: "User with this name is Allready exist",
        status:"error"
      });
    }else{
    const hashedPassword = await argon2.hash(req.body.password);
    const newUser = await Usermodel.create({
      name:req.body.name,
      email:req.body.email,
      password:hashedPassword
    })
    newUser.save();
    res.json({
      message: "SignUp Successful",
      status:"success"
    });
  }
  } catch (err) {
    res.json({
      message: "Error",
    });
  }
};

const Login = async (req, res) => {
  console.log(req.body)
  try {
    const user = await Usermodel.findOne({ name:req.body.name });
    if (user) {
      const verified = await argon2.verify(user.password,req.body.password)
      console.log(verified)
      if (verified) {
        const token = jwt.sign({ name: user.name }, process.env.KEY);
        res.json({
          message: "Login Success",
          status:"success",
          token: token,
        });
      } else {
        res.json({
          message: "Wrong password",
          status:"error"
        });
      }
    } else {
      res.json({
        message: "Username Not Found",
        status:"error"
      });
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  Login,
  Signup,
};

