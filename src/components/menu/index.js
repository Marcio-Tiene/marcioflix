import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../Button'


function Menu() {
    return (

        <nav className= 'menu'>
            <a>
                <img className= 'logo' src={logo} alt="marcioflix logo" />
            </a>

           <Button as="a" className="buttonLink" href="/">
               Novo Vídeo
           </Button>
        </nav>
    )
}

export default Menu
