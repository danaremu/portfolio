import React from 'react'

import './Index.css'
import portfolio_logo from './../compx/icons/portfolio_logo.png'

const Index = () => {
  return (
    <nav>
      <div className='app-container'>
        <img src={portfolio_logo} className='nav-logo' />
        <div className='nav-menu'>
          <ul className=''>
            <a>
              <li>nexus</li>
            </a>
            <a>
              <li>code vault</li>
            </a>
            <a>
              <li>prologue</li>
            </a>
            <a>
              <li>history</li>
            </a>
            <a>
              <li>contact</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Index
