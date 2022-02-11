import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { logIn } from "../slices/animeSlices";
import { useNavigate } from "react-router-dom";


function SignIn() {
  const [error, setError] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const history = useNavigate();
  async function signInHandler(e) {
    e.preventDefault();
    setError("");
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userCredentital) => {
        const user = userCredentital.user;
        dispatch(
          logIn({
            email: user.email,
          })
        );
        history("/");
      })
      .catch((err) => {
        setError(err);
      });
  }
  return (
    <div className="h-screen grid items-center text-black mx-auto justify-center p ">
      <div className="max-w-lg h-max w-auto border rounded-md border-black p-10 bg-gray-400">
        <h1 className="text-3xl text-center m-3">Sign In</h1>
        {error && (
          <div className=" bg-red-300 p-3 rounded-md">
            <p>ashdhasdhash</p>
          </div>
        )}
        <form className="space-y-2" onSubmit={signInHandler}>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
            ref={emailRef}
              type="text"
              className="w-full rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input
            ref={passwordRef}
              type="password"
              className="w-full rounded-md p-2"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="p-2 bg-blue-500 rounded-md w-full">Sign In</button>
          <button className="p-2 bg-blue-500 rounded-md w-full">
            Sign In by Facebook
          </button>
        </form>
        <p className="text-lg mt-3">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:text-blue-700" to="/signup">
            Sign Up!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
