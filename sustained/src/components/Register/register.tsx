import React from 'react';

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4">
        <div className="text-center mb-4" >
        <h1 className="text-center"> Register Now</h1>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="password"/>
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2">Register</button>
        </form>
        </div>
    </div>
  );
};

export default Register;
