import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logo from './../../assets/logo.svg'

import './style.css';

function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(event) {
        event.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile');

        } catch (err) {
            alert('Error in registering case')
        }
    }

    return (
        <div className="new-incident-container ">
            <div className="content">
                <section>
                    <img src={logo} alt="logo"/>

                    <h1>Register new case </h1>
                    <p> Describe the case in detail to find the hero to solve it. </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02091"/>
                         Back Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}> 
                        <input 
                            placeholder="Case title"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                        <textarea 
                            placeholder="Description"
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        />
                        <input 
                            placeholder="Value in reais"
                            value={value}
                            onChange={event => setValue(event.target.value)}
                        />

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident;