import { useState } from 'react'

function Menu () {
  const [active, setActive] = useState(false)

  return (
    <>
      <a href='#' className='icon-menu' id='open-menu' onClick={() => { setActive(!active) }}> </a>
      <a href='/' className='logo'>
        <img src='/images/logo.svg' alt='Logo de Sneakers' />
      </a>
      <nav className={`${active ? 'active' : ''}`}>
        <button className='btn icon-close' id='close-menu' onClick={() => { setActive(!active) }}>
          <img src='/images/icon-close.svg' alt='Cerrar menu' />
        </button>
        <ul className='font-bold'>
          <li><a href='#'>Collections</a></li>
          <li><a href='#'>Men</a></li>
          <li><a href='#'>Women</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
