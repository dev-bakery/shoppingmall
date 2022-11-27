import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

export default function Header() {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, []);

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Shoopy</h1>
      </Link>

      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>products</Link>
        {user && user.isAdmin && (
          <Link to='/products/new'>
            <BsFillPencilFill />
          </Link>
        )}
        <Link to='/cart'>cart</Link>
        {!user && (
          <button type='button' onClick={login}>
            Login
          </button>
        )}
        {user && <User user={user} />}
        {user && (
          <button type='button' onClick={logout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
