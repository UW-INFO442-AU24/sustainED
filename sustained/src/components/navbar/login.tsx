import React, { useState, ChangeEvent, FormEvent } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  //handle email change
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  // handle password change
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile'); // Redirect to profile page after successful login
    } catch (error: any) {
      setError(error.message); // Display error message if authentication fails
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="card p-4">
        <div className="text-center mb-4">
          <h1>Login</h1>
          {error && <p className='text-danger'>{error}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="janedoe@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
         
          <button type="submit" className="card-button">Login</button>
        </form>
      </div>
      <p>Don't have an account? Register on our home page!</p>
    </div>
  );
}

export default Login
