import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
function CadastroCategria() {
    return (

        <PageDefault>
            <h1>Pagina de cadastro de Categrias</h1>
            <Link to='/'>
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategria