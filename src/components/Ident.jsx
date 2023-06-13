import React from 'react'
import './Ident.css';

const Ident = ({ data, updateFieldHandler }) => {
    return (
        <div className='ident'>
            <div className="main">
                
                <div className="Seu-nome">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name='text' id='name' placeholder='Digite seu nome' value={data.name || ""} onChange={(e) => updateFieldHandler("name", e.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder='Digite seu e-mail' value={data.email || ""} onChange={(e) => updateFieldHandler("email", e.target.value)} />
                </div>
            </div>

        </div>
    )
}

export default Ident;