import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState();
    const history = useNavigate()
    async function signUpHandler(e) {
        e.preventDefault();
        setError("")
        if(passwordConfirmRef.current.value !== passwordRef.current.value) {
            return setError("Password not matched")
        }
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(userCredential => {
            const user = userCredential.user;
            history("/signin")
        }).catch(err => setError(err))
    }
  return (
    <div className='h-screen grid items-center text-black mx-auto justify-center p '>
    <div className='max-w-lg h-max w-auto border rounded-md border-black p-10 bg-gray-400'>
      <h1 className='text-3xl text-center m-3'>Sign Up</h1>
      {error && <div className=' bg-red-300 p-3 rounded-md'>
        <p>{error}</p>
      </div>}
        <form className='space-y-2' onSubmit={signUpHandler}>
          <div className='space-y-2'>
            <label htmlFor='email'>Email</label>
            <input type="text" ref={emailRef} className='w-full rounded-md p-2' placeholder='Enter your email'/>
          </div>
          <div className='space-y-2'>
          <label htmlFor='password'>Password</label>
            <input type="password" ref={passwordRef} className='w-full rounded-md p-2' placeholder='Enter your email'/>
          </div>
          <div className='space-y-2'>
          <label htmlFor='password'>Confirm Password</label>
            <input type="password" ref={passwordConfirmRef} className='w-full rounded-md p-2' placeholder='Enter your password'/>
          </div>
          <button className='p-2 bg-blue-500 rounded-md w-full'>Sign Up</button>
        </form>
        <p className='text-lg mt-3'>Are your forget your password? <Link className='text-blue-500 hover:text-blue-700' to="/signup">Reset password!</Link></p>
    </div>
  </div>
  )
}

export default SignUp