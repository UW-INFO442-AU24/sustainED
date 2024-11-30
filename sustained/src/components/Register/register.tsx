import React, { FormEvent, useState, ChangeEvent } from 'react';
import './registerStyle.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, push, set as firebaseSet} from 'firebase/database';
//get a reference to the database service

const Form = () => {
  // state object to manage the form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    grade: ""
  });

  // feedback for whether the form succeeds or an error occurs when signing up
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // event handler for updating the state when input field on the form changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // event handler to handle form submissions
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    setError(null);
    setSuccess(null);

    // object with current formData
    const { email, password, password2, ...userData } = formData;
    if (password !== password2) {
      setError("Passwords are not matching.")
      return;
    }

    const db = getDatabase();
    const auth = getAuth();

    // create user into auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signed up
        const user = userCredential.user;
        const uid = user.uid

        // save user data to realtime database using authentication uid
        const newUserRef = ref(db, `users/${uid}`);
        firebaseSet(newUserRef, formData)
      })
      .then(() => {
        setSuccess("Registration successful!")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4" id="register-container">
        <div className="text-center mb-4">
          <h1>Register Now</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Jane"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="janedoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password2" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              value={formData.password2}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="grade" className="form-label">What grade do you teach?</label>
            <input
              type="text"
              className="form-control"
              id="grade"
              name="grade"
              placeholder="Grade"
              value={formData.grade}
              onChange={handleChange}
            />
          </div>
          {error && <p className='text-danger'>{error}</p>}
          {success && <p className='text-success'>{success}</p>}
          <button type="submit" className="card-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Form;