import { useState } from "react";
import EmotionsPage from "./EmotionsPage";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
export default function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [LoggedUser, setLoggedUser] = useState(null);

  function submitHandler(e) {
    e.preventDefault();

    // Retrieve stored email and password from local storage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    const StoredName = localStorage.getItem("userName");

    // Compare entered email and password with stored values
    if (email === storedEmail && password === storedPassword) {
      // If they match, log the user in
      setIsLoggedIn(true);
      setLoggedUser(StoredName);
      console.log("Logged in successfully");
      <Link to="/emotionpage"></Link>;
    } else {
      // If they don't match, show an error message
      alert("invaild email or password");
    }
  }
  if (isLoggedIn) {
    // true
    navigate("/emotionpage");
  }
  return (
    <>
      <h1>hello from the login page</h1>
      <form onSubmit={submitHandler} className="Login-Form">
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button>Login </button>
      </form>
    </>
  );
}
