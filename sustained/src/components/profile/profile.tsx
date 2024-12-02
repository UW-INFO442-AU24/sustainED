import React, { useState, ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./profile.css"
import { Card, CardFooter, Button } from "@nextui-org/react";
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
      } else {
        console.log("no user data found in database")
      }
    })
  }



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
        setError(errorMessage)
      })
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  return (
    <div className="profile-container">
      {userData ? (
        <>
          <h2 className='pt-3'>Welcome, {userData.firstName} {userData.lastName}!</h2>
          <h2>You currently teach {userData.grade} grade!</h2>
          <div className='profile-info'>
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

          <div className="quiz-result">
            <h3>Your Most Recent Quiz Results</h3>
            {userData.quiz?.length > 0 ? (
              <div className='cards-container'>
              {userData.quiz.map((resource: any, index: any) => (
                  <Card key={`${resource.id}-${index}`} isFooterBlurred className="resource-card">
                      <img
                          alt="resource background"
                          className="z-0 w-full h-full object-cover"
                          src={resource.image}
                          />
                      <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                          <div className="flex flex-grow gap-2 items-center">
                              <div className="flex flex-col">
                                  <h4 className="text-white/90 font-medium text-xxl">{resource.title}</h4>
                                  <p className="text-small text-white/60">Type: {resource["media-type"]}</p>
                                  <p className="text-small text-white/60">Grade Level: {resource["grade-level"].join(", ")} </p>
                              </div>
                          </div>
                          <Button radius="full" size="sm" as="a" href={resource["external-link"]} target="_blank" rel="noopener noreferrer">
                              View
                          </Button>
                      </CardFooter>
                  </Card>
              ))}
          </div>
            ) : (
              <p>No quiz results yet.</p>
            )}
          </div>
          <button onClick={handleLogout} className="logout-button">Log Out</button>
        </>
        
      ) : (
        <p>Loading your profile...</p>
      )}
    </div>
  )
}

export default Profile
