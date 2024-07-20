import React, { useState } from 'react'
import './Sign.css'
import logo from '../../assets/logo.png'
import {signin, signup} from '../../firebase'
import loader from '../../assets/vibeflix-spinner.gif'

const Sign = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (signState === "Sign In") {
      await signin(email, password)
    } else {
      await signup(name, email, password)
    }
    setLoading(false)
  }


  return (
    loading?<div className="loader">
      <img src={loader} alt="" />
    </div>:
    <div className='signin'>
       <a href="/">
      <img src={logo} alt="VibeFlix" /></a> 

      <div className="sign-form">
        <p className='heading'>{signState}</p>
        <form>
          {signState === "Sign Up"? <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name='name' autoComplete='name' placeholder='Enter Your Name' required /> : <></>}
          
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name='email' autoComplete='name' placeholder='Enter Your Email Address' required />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" placeholder='Enter Password' required />
          <button onClick={user_auth} type='submit'>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input name='remember' type="checkbox" />
              <p>Remember Me</p>
            </div>
            <p className='help'>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? <p>New to VibeFlix ? <span onClick={() => {setSignState("Sign Up")}}> Sign Up Now</span></p> 
          : <p>Already Have an Account ? <span onClick={() => {setSignState("Sign In")}}> Sign In</span></p> }
          
        </div>
      </div>

    </div>
  )
}

export default Sign