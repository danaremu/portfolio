import React from 'react'

import './Index.css'
import portfolio_logo from './../compx/icons/portfolio_logo.png'

const Index = () => {
  return (
    <nav>
      <div className='app-container'>
        <img src={portfolio_logo} alt={'portfolio logo'} className='nav-logo' />
        <div className='nav-menu'>
          <ul className=''>
            <li>nexus</li>
            <li>codevault</li>
            <li>prologue</li>
            <li>contact</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Index
