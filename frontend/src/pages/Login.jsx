import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  // we gave preventdefault for when we submit do not reload the page
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-8'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {/* required simple means it is compulsory to fill the form */}
      {/* check if current state is login then dont show name field */}
      {currentState === 'Login' ? '': <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email'required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password'required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password</p>
        {/* if current state is login then show login here */} 
        {/* else show create account */}
        {
          currentState === "Login" 
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> 
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In': 'Sign up'}</button>
    </form>
  )
}
export default Login