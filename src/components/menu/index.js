import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'


function Menu() {
    return (

        <nav className= 'Menu'>
            <a href = "/">
                <img className= 'Logo' src={Logo} alt="marcioflix logo" />
            </a>
        
           <Button as="a" className="buttonLink" href= "/" >
               Novo Vídeo
           </Button>
        </nav>
    )
}

export default Menu
