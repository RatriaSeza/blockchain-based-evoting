import React from "react";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 w-full ">
      <div className="container w-11/12 mx-auto flex justify-between items-center py-4 bg-gray-700">
          <a href="/login" className="text-xl font-bold">Home</a>
          <a href="/register" className="text-xl font-bold">Vote</a>
          <a href="/" className="text-xl font-bold">Profile</a>
      </div>
    </nav>
  )
}

export default Nav;