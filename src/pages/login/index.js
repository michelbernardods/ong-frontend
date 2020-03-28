import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import heroesImg from './../../assets/heroes.png'
import logo from './../../assets/logo.svg'


function Login () {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
            
        } catch (err) {
            alert('Login failed, please try again');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Log In</h1>

                    <input 
                        placeholder="Your ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                     />
                    <button className="button" type="submit">Connect</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02091"/>
                     I don't have a registration
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes"/>
        </div>
    )
}


export default Login;