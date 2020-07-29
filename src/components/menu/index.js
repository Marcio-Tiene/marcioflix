import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './index.css'
import Button from '../Button'
import {Link} from 'react-router-dom'


function Menu() {
    return (

        <nav className= 'Menu'>
            <Link to = "/">
                <img className= 'Logo' src={Logo} alt="marcioflix logo" />
            </Link>
        
           <Button as={Link} className="buttonLink" to= "/cadastro/Video" >
               Novo Vídeo
           </Button>
        </nav>
    )
}

export default Menu
