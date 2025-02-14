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
            <li>code vault</li>
            <li>prologue</li>
            <li>history</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Index
