import React, { useState, Component } from "react";
import SignUp from "../Components/auth/SignUp";
import "./SignUpButton.css";
import SignIn from "../Components/auth/SignIn";
import { signOut } from "firebase/auth";

import { auth } from "../firebase";

class SignUpButton extends Component {
  state = {
    open: false,
    showPortal: false,
    showPortalTwo: false,
    user: null,
    showLogoutModal: false, // new state property
  };

  handleBodyClick = () => {
    this.setState({ open: false });
  };

  handleButtonClick = (event) => {
    if (event.target.innerText === "Sign Up") {
      this.setState({
        open: true,
        showPortal: true,
      });
    } else {
      this.setState((prevState) => ({ open: !prevState.open }));
    }
  };

  handleButtonClickTwo = (event) => {
    if (event.target.innerText === "Sign In") {
      this.setState({
        open: true,
        showPortalTwo: true,
      });
    } else {
      this.setState((prevState) => ({ open: !prevState.open }));
    }
  };

  handleButtonCloseClick = () => {
    this.setState({ showPortal: false });
  };
  handleButtonCloseClickTwo = () => {
    this.setState({ showPortalTwo: false });
  };
  handleButtonCloseClickThree = () => {
    this.setState({ showLogoutModal: false });
  };

  handleSignUpClick = () => {
    this.setState({ showPortal: true });
  };
  handleSignInClick = () => {
    this.setState({ showPortalTwo: true });
  };

  handleLogout = () => {
    signOut(auth)
      .then(() => {
        this.setState({ user: null, showLogoutModal: true }); // set showLogoutModal to true
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="containerOne">
        <button
          type="button"
          className="button"
          onClick={this.handleButtonClick}
        >
          ☰
        </button>
        {this.state.open && (
          <div className="dropdown">
            <ul>
              <li onClick={this.handleSignUpClick}>Sign Up</li>
              <li onClick={this.handleSignInClick}>Sign In</li>
              <li onClick={this.handleLogout}>Log Out</li>
            </ul>
          </div>
        )}
        {this.state.open && (
          <div className="overlay" onClick={this.handleBodyClick} />
        )}
        {this.state.showPortal && (
          <div className="portal-container">
            <button
              className="close-button"
              onClick={this.handleButtonCloseClick}
            >
              X
            </button>
            <SignUp showPortal={this.state.showPortal} />
          </div>
        )}

        {this.state.showPortalTwo && (
          <div className="portal-containerTwo">
            <button
              className="close-buttonTwo"
              onClick={this.handleButtonCloseClickTwo}
            >
              X
            </button>
            <SignIn showPortal={this.state.showPortalTwo} />
          </div>
        )}

        {this.state.showLogoutModal && (
          <div className="modal">
            <button
              className="close-buttonThree"
              onClick={this.handleButtonCloseClickThree}
            >
              X
            </button>
            <p>You have been logged out.</p>
          </div>
        )}
      </div>
    );
  }
}

export default SignUpButton;
