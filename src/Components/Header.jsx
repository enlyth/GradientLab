import React from 'react'
import NavButtons from './NavButtons'
import Logo from '../logo.png'

const Header = ({ store }) => {
  return (
    <div className="grid-container header-top">
      <div className="HeaderLogo">
        <div className="App-logo">
          <img src={Logo} style={{ width: 18, height: 18, marginRight: 8 }} alt="GradientLab" />
          GradientLab
        </div>
      </div>
      <div className="HeaderRight">
        <NavButtons store={store} />
      </div>
    </div>
  )
}

export default Header
