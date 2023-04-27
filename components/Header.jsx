import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { user, login, logout } = useContext(AuthContext);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Graphica Blogger</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {!user && <button className='login' onClick={login}>Login/Signup</button>}
        {user && <button className='login' onClick={logout}>Logout</button>}
      </div>
    </div>
  );
};

export default Header;
