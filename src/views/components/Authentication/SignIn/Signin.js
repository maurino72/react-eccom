import React from "react";
import "./Signin.scss";

import FormInput from "../../SharedComponents/FormInput/FormInput";
import CustomButton from "../../SharedComponents/CustomButton/CustomButton";
import { GoogleSignIn } from "../../../../config/firebase";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={GoogleSignIn}>
            {" "}
            Sign In with Google{" "}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Signin;
