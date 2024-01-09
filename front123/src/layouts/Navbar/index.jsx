import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'

const Navbar = () => {
  const {basket} = useContext(BasketContext)

  return (
    <nav>
        <ul>
            <NavLink to={"/"}><li>Home Page</li></NavLink>
            <NavLink to={"/Addpage"}><li>Add Page</li></NavLink>
            <li>Detail Page</li>
            <NavLink to={"/Basket"}><li>Basket<sup>{basket.length ? basket.length : null}</sup></li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar