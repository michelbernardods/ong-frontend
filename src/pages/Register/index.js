import React, { useState } from 'react' 
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logo from './../../assets/logo.svg'

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();


    async function handleRegister(event) {
        event.preventDefault();
        const data = {name, email, whatsapp, city, uf};

       try {
        const response = await api.post('ongs', data)
        alert(`Your access id: ${response.data.id}`);

        history.push('/')
       
        } catch (err) {
           alert('registration error')
       }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="logo"/>

                    <h1>Register</h1>
                    <p> Register, enter the platform and help people find the cases of your ONG. </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02091"/>
                     I don't have a registration
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                        <input 
                            placeholder="Name of the ONG"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="E-mail"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                         />
                        <input 
                            placeholder="WhatsApp"
                            value={whatsapp}
                            onChange={event => setWhatsapp(event.target.value)}
                         />

                     <div className="input-group">
                        <input 
                            placeholder="City"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder="UF" style={{width: 80}}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;