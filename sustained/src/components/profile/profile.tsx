import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./profile.css"
import { getAuth, updateEmail, updatePassword, updateProfile, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref, onValue, set } from 'firebase/database'

const profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [favorites, setFavorites] = useState([])
  const [status, setStatus] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const db = getDatabase()
    const usersRef = ref(db, "users")


    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        
      } else {
        // User is signed out
      }
    })

  })


  return (
    <div>
      
    </div>
  )
}

export default profile
