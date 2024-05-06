'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  const [data, setData] = useState(null)

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/me")

      console.log(response.data.data._id);

      setData(response.data.data._id)

    } catch (error: any) {

      console.log(error);
      toast.error(error.message)
    }
  };

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout")
      toast.success("Logout successful")
      router.push("/signin")
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <h2>{data === null ? "Loading..." : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr />
      <button
        className='bg-red-500 text-white font-bold py-2 px-4 rounded-md'
        onClick={logout}
      >
        logout
      </button>
      <button
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md'
        onClick={getUserDetails}
      >
        get use details
      </button>
    </div>
  )
}
