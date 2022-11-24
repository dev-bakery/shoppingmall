import React from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <h1>
        <Link to='/'>Shoopy</Link>
      </h1>
      <div>
        <Link to='/products'>products</Link>
        <Link to='/products/new'>
          <BsFillPencilFill />
        </Link>
        <Link to='/cart'>cart</Link>
        <button type='button'>Login</button>
      </div>
    </>
  );
}
