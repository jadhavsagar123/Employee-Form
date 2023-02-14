import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signup } from "../Service/api";
import { useNavigate } from "react-router-dom";
const Signup = () => {

const navigate  = useNavigate()
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [input, setInput] = useState(initialState);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
 
  const SignUpuser = async() => {
     await signup(input);
    navigate('/login');
}

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: "20rem",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          name={"name"}
          value={input.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          placeholder="Enter Email"
          type="email"
          fullWidth
          required
          name={"email"}
          value={input.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          name={"password"}
          value={input.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={() => SignUpuser()}
        >
          Sign Up
        </Button>
        <Typography>
          {" "}
          Allredy have an account?
          <Link to="/">Login</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;

