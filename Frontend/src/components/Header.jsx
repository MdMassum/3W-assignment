import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isAdminLoggedIn, setIsAdminLoggedIn }) => {

  const navigate = useNavigate();

  const handleLogout = ()=>{
    setIsAdminLoggedIn(false);
    navigate('/submit')
  }
  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">3W Assignment</h1>
      <nav className="flex gap-4">
        {isAdminLoggedIn ? (
          <>
            <Link to="/dashboard" className="bg-white text-blue-500 px-4 py-2 rounded">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-white text-blue-500 px-4 py-2 rounded">
            Login
          </Link>
        )}
        <Link to="/submit" className="bg-green-500 px-4 py-2 rounded">
          Create User
        </Link>
      </nav>
    </header>
  );
};

export default Header;
