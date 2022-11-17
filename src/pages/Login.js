import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <form>
        <h1>Login</h1>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>Login</button>
        <p>Username & password salah!</p>
        <span>Belum punya akun?  <Link to="/register">
              Register
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login