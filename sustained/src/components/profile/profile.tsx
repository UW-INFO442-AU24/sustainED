import React, { useState, ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./profile.css"
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth'
import { getDatabase, ref, onValue, update } from 'firebase/database'



const Profile = () => {
  const [user, setUser] = useState<User | null>(null) // authenticated user
  const [userData, setUserData] = useState<any>(null) // data from realtime database
  const [editedData, setEditedData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    grade: ""
  }); // data to edit
  const [favoritedResources, setFavoritedResources] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const navigate = useNavigate()

  const auth = getAuth()
  const db = getDatabase()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        setUser(user)
        fetchUserData(user.uid)
      } else {
        // user is signed out
        navigate("/login")
      }
    })
  }, [navigate])

  const fetchUserData = (uid: string) => {
    const userRef = ref(db, `users/${uid}`)
    // check database based on user id
    onValue(userRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        setUserData(data)
        setEditedData(data)
        // find user's favorited resources
        //fetchFavoritedResources(uid)
      } else {
        console.log("no user data found in database")
      }
    })
  }

  // fetch favorited resources for the user
  // const fetchFavoritedResources = (uid: string) => {
  //   const favoriteRef = ref(db, `users/${uid}/favorites`)
  //   onValue(favoriteRef, (snapshot) => {
  //     if (snapshot.exists()) {
  //       setFavoritedResources(snapshot.val())
  //     } else {
  //       setFavoritedResources([]) // no favorites found
  //     }
  //   })
  // }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setEditedData((prev) => ({ ...prev, [name]: value}))
  }

  const validateGrade = (grade: string) => {
    const gradeRegex = /^(1st|2nd|3rd|[4-9]th|1[0-2]th)$/
    return gradeRegex.test(grade)
  }
  
  const saveUserData = () => {
    if (!user) return
    const userRef = ref(db, `users/${user.uid}`)
    setError(null);
    setSuccess(null);

    if (!validateGrade(editedData.grade)) {
      setError("Plase enter a valid grade (e.g. 1st, 2nd, 3rd).")
      return
    }

    // update realtime database
    update(userRef, editedData)
      .then(() => {
        console.log("success updating profile")
        setSuccess("Success!")
      })
      .catch((error) => {
        const errorMessage = error.message
        setError("errorMessage")
      })
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  // const handleLogin = async () => {
  //   try {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // signed in
  //         const user = userCredential.user
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code
  //         const errorMessage = error.message
  //       })
  //   }
  // }

  return (
    <div className="profile-container">
      {userData ? (
        <>
          <h2>Welcome, {userData.firstName} {userData.lastName}!</h2>
          <h2>You currently teach {userData.grade} grade!</h2>
          <div className="profile-info">
            <h3>Your Information</h3>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={editedData.firstName || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={editedData.lastName || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Grade Taught:
              <input
                type="text"
                name="grade"
                value={editedData.grade || ""}
                onChange={handleChange}
              />
            </label>
            {error && <p className='text-danger'>{error}</p>}
            {success && <p className='text-success'>{success}</p>}
            <button onClick={saveUserData} className="save-button">Save Changes</button>
          </div>

          {/* <div className="favorites-section">
            <h3>Your Favorited Resources</h3>
            {favoritedResources.length > 0 ? (
              <ul>
                {favoritedResources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            ) : (
              <p>No favorited resources yet.</p>
            )}
          </div> */
          <button onClick={handleLogout} className="logout-button">Log Out</button>}
        </>
        
      ) : (
        <p>Loading your profile...</p>
      )}
    </div>
  )
}

export default Profile
