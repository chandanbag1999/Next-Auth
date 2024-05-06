'use client'

import React, { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function page() {

  const router = useRouter()

  const [user, setUser] = React.useState({
    email: "",
    password: ""
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onSignin = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/login", user)
      console.log("Signin success", response.data);
      router.push("/profile")
    } catch (error: any) {
      console.log("Signin error");
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading ? "Loading..." : "Sign in"}</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        type="email"
        id='email'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='email'
        className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='password'
        className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
      />
      <button
        onClick={onSignin}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        {buttonDisabled ? "not allowed" : "Sign in"}
      </button>
      <Link href="/signup" className='
      text-blue-500 hover:text-blue-700 '>Visit sign up page</Link>
    </div>
  )
}
