import React from 'react'
import { FaTimes, } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Continue from '../../component/continue/Continue';
import './Form.css'
import { loginUser } from '../../config/Firebase';


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const submit = async (email, password) => {
    const loginUserRes = await loginUser(email, password)
    // console.log("loginUserRes", loginUserRes)
    if (loginUserRes.status === 200) {
      alert(loginUserRes.message)
      navigate("/afterdashboard")

    } else {
      alert(loginUserRes.message)
    }
  }

  return (
    <div className="center-container">
      <div className="gmail-option scrollable">
        <div className="gmail-option">
          <div className="cancel-icon">
            <button className='cancel'
              onClick={() => {
                navigate("/")
              }}
            >
              <FaTimes style={{ position: 'fixed' }} />
            </button>
          </div>
          <div className='formRegister'>
            <button className='registerBtn'
              onClick={() => {
                navigate("/register")
              }}>
              REGISTER
            </button>

            <button className='registerBtn' style={{ marginLeft: "30px" }}
              onClick={() => {
                navigate("/login")
              }}>
              LOGIN
            </button>
          </div>
          <div>
            <h1>LOGIN</h1>
            <p style={{ marginTop: "-5px", fontWeight: "500" }}>Welcome back! Log in to your account <br />
              and explore our website's offerings.</p>
          </div>

          <div className='formRegister'>
            <div style={{ paddingTop: "20px" }}>
              <label className='registerLabel' style={{ marginLeft: "-85px" }} htmlFor="name">Email</label> <br />
              <input className='registerInpur' type="email" id="email" name="email" placeholder='Email'
                required value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div style={{ paddingTop: "20px" }}>
              <label className='registerLabel' style={{ marginLeft: "-55px" }} htmlFor="name">Password</label> <br />
              <input className='registerInpur' type="password" id="password" name="password" placeholder='Password'
                required value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <button className='registerBtn3'
              onClick={() => {
                submit(email, password)
              }}
            >LOGIN</button>
          </div>

          <br />
          <div style={{ display: "flex" }}>
            <div>
              <hr className='registerLine' />
            </div>
            <div>
              <p className='registerPara'>Or Continue Wih</p>
            </div>
            <div>
              <hr className='registerLine' />
            </div>

          </div>
          <div className="sign-up-container">

            <Continue
              profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJU49GdBbZk1UboA2Ohj98gdfkiaON3cKV9RTL6rLGVLCjNMmSG-QSS5Bk3XTKl1EEGSM&usqp=CAU"
            />
            <Continue
              profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6B3XeguS7pe6YRxW8DwCw1eN0GAS-GMjoA&usqp=CAU"

            />
            <Continue
              profile="data:image/jpeg;base64,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"

            />
            <Continue
              profile="https://i.pinimg.com/1200x/f0/e6/40/f0e640bfaee46b31d21a8fa1087c2efc.jpg"

            />

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login