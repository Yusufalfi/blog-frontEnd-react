import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <form>
      <h1>Register</h1>
        <input type='text' placeholder='username' required />
        <input type='email' placeholder='email' required />
        <input type='password' placeholder='password' required />
        <button>Register</button>
        <p>Username & password salah!</p>
        <span>Sudah punya akun?  <Link to="/login">
              Login
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Register