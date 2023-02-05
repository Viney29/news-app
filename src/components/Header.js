import React from 'react'
import {Link} from 'react-router-dom'
import {capitalizeFirstLetter} from '../helpers'

const Header = (props) => {
  const routes = ['business','entertainment','general','health','science','sports','technology'];
  return (
    <header className='header'>
        <nav className='nav'>
          <Link key="0" className='navlink' to="/">Home</Link>
          {routes.map((item, index)=>{
            return <Link key={index+1} className='navlink' to={`/${item}`}>{capitalizeFirstLetter(item)}</Link>
          })}
        </nav>
    </header>
  )
}

export default Header;