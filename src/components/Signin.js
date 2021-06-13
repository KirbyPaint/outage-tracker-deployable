import React from "react";
import firebase from "firebase/app";

function Signin() {

  const SignInStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  const TextStyle = {
    borderRadius: "15px",
    width: "95%",
    height: "30px",
    marginTop: "10px",
    padding: "15px"
  }

  const ButtonStyle = {
    borderRadius: "15px",
    backgroundColor: "lightblue",
    width: "100px",
    height: "50px",
    marginTop: "10px"
  }

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      alert("successfully signed up!");
    }).catch(function (error) {
      alert(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      alert("Successfully signed in!");
    }).catch(function (error) {
      alert(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      alert("Successfully signed out!");
    }).catch(function (error) {
      alert(error.message);
    });
  }

  return (
    <>
      <div style={SignInStyle}>
        {/* <form onSubmit={doSignUp} style={SignInStyle}>
          <p>Sign up :
            <input style={TextStyle}
              type="text"
              name="email"
              placeholder="email" />
            <input style={TextStyle}
              type="password"
              name="password"
              placeholder="Password" />
            <button type="submit" style={ButtonStyle}>Sign up</button>
          </p>
        </form> */}
        <form onSubmit={doSignIn} style={SignInStyle}>
          <p>Sign In :
            <input style={TextStyle}
              type="text"
              name="signinEmail"
              placeholder="email" />
            <input style={TextStyle}
              type="password"
              name="signinPassword"
              placeholder="Password" />
            <button type="submit" style={ButtonStyle}>Sign in</button>
          </p>
        </form>
        {/* <p style={SignInStyle}>Sign Out:<br />
          <button onClick={doSignOut} style={ButtonStyle}>Sign out</button>
        </p> */}
      </div>
    </>
  )
}

export default Signin