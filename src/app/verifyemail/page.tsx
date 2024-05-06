'use client'

import React, { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
// import router from 'next/router'

export default function page() {
  const [token, setToken] = React.useState("")
  const [verified, setVerified] = React.useState(false)
  const [error, setError] = React.useState(false)

  const verifyEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", {token})
      setVerified(true)
      setError(false)
    } catch (error: any) {
      setError(true)
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    setError(false)
    // 1st approach
    const urlToken = window.location.search.split("=")[1]
    setToken(urlToken || "")

    // 2nd approach
    // const { query } = router
    // const urlTokenTwo = query.token
    // setToken(urlTokenTwo || "")
    // add dependency array in router

  }, []);


  useEffect(() => {
    setError(false)
    if (token.length > 0) {
      verifyEmail()
    }
  }, [token]);


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold underline'>Verify Email</h1>
      <h2 className='text-2xl font-bold'>
        { token ? `${token}` : "No token found"}
      </h2>
      { verified && (
        <div>
          <h2 className='text-2xl font-bold'>Email Verified</h2>
          <Link href="/signin">Login</Link>
        </div>
      ) }
      { error && (
        <div>
          <h2 className='text-2xl font-bold'>Error</h2>
        </div>
      )}
    </div>
  )
}
