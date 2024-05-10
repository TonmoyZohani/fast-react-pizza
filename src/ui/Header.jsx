import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

const Header = () => {
  return (
    <header className='bg-slate-400'>
        <Link to="/">Fast React Pizza Co.</Link>
        <SearchOrder/>
        <p>Tonmoy</p>
    </header>
  )
}

export default Header