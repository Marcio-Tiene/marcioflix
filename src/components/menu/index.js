import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import ButtonLink from './components/buttonLink'

function Menu() {
    return (

        <nav className= 'menu'>
            <a>
                <img className= 'logo' src={logo} alt="marcioflix logo" />
            </a>

            <ButtonLink href= '/' className= 'buttonLink' />
        </nav>
    )
}

export default Menu
