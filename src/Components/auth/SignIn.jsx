import { useState } from "react";
import React from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import AuthDetails from "../auth/AuthDetails";

const SignIn = ({ showPortal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
      })
      .catch((error) => {
        console.log(` Invalid Email: ${error}`);
      });
  };

  return (
    <div className="sign-in-container">
      {user ? (
        <div>
          <p>You are now</p>
        </div>
      ) : (
        <form onSubmit={handleSignIn}>
          <h1>Log In</h1>
          <input
            type="email"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input
            type="password"
            placeholder="Enter Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Log In</button>
        </form>
      )}
      <AuthDetails />
    </div>
  );
};

export default SignIn;
