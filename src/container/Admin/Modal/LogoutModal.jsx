import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const LogoutModal = () => {
    const [userEmail , setUserEmail] = useState('')
    const [firstLetter , setFirstLetter] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
            const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
            setUserEmail(loggedInUser?.email)
            setFirstLetter(loggedInUser?.name.charAt(0).toUpperCase())
        },[])

        const handleLogoutUser = ()=>{
            localStorage.removeItem("loggedInUser")
            navigate("/")
        }

  return (
    <>
    {/* <p id='arrow-icon'>&#xf0d8;</p> */}
    <section id='logout-container'>
        <div id='first-letter'>
            {firstLetter}
        </div>
        <p>{userEmail}</p>
        <button id='logout-button' onClick={handleLogoutUser}>Logout</button>
    </section>
    </>
  )
}

export default LogoutModal