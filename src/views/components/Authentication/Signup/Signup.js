import React from "react";
import "./Signup.scss";

import FormInput from "../../SharedComponents/FormInput/FormInput";
import CustomButton from "../../SharedComponents/CustomButton/CustomButton";

import {
  auth,
  createUserWithEmailAndPassword
} from "../../../../config/firebase";
import { createUserProfileDocument } from "../../../../config/firestore";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    let user;

    if (password !== confirmPassword) {
      alert(`Password don't match`);
      return;
    }

    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          user = userCredentials.user;
        }
      );

      if (user) {
        await createUserProfileDocument(user, { displayName });
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
      }
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with you email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Full Name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
