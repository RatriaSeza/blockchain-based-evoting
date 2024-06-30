import React from "react";

const Header = () => {
  return (
    <header className="w-4/5 mx-auto bg-white rounded-full">
      <nav className="flex justify-between items-center py-2 text-black">
        <div className="flex justify-between items-center divide-x divide-black">
          <div className="px-8">
            <h1 className="text-2xl font-bold">Pemira FSM UNDIP</h1>
          </div>
          <div className="px-8">
            <a href="/Login" className="px-4 py-4 bg-blue-500 hover:bg-blue-600 rounded">Login</a>
            <a href="/Vote" className="px-4 py-4 bg-blue-500 hover:bg-blue-600 rounded">Vote</a>
          </div>
        </div>
        <div>
          <a href="">Help</a>
          <a href="">Profile</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
