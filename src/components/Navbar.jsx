import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <header className=" sticky top-0 flex justify-between items-center px-5 py-4 md:px-10  w-full">
      <h1 className="text-2xl font-bold">Quick Chat</h1>
      <UserButton afterSignOutUrl="/sign-in" />
    </header>
  )
}

export default Navbar
