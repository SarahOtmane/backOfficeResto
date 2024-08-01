import { useState } from "react";

import InputLabel from "../components/InputLable";
import Button from "../components/Button";
import axiosInstance, {addToken} from '../services/axiosInstance';

import '../css/screen.css';

import logo from '../assets/logo.jpg';



export default function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState(false);

    const login = async(e) =>{
        e.preventDefault();
        
        try {
            const response = await axiosInstance.post('/admins/login', formData);
            const token = response.data.token;

            addToken(token);
            localStorage.setItem('role', 'admin');
        } catch (error) {
            const status = error.response ? error.response.status : 500;
            switch (status) {
                case 401:
                    setError(true);
                    break;
                case 404:
                    setError(true);
                    break;
                default:
                    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
            }  
        }
    }

    return(
        <main className="login w-100 h-100">
        <form className="m-auto backVert">
            <div className="head row">
                <img src={logo} alt='logo' />
                <h1>Admin</h1>
            </div>
            {error && <p style={{ color: 'red' }}>Email ou mot de passe incorrect.</p>}
            <InputLabel 
                label='Email' 
                type='email'
                placeholder='votre e-mail'
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
            />

            <InputLabel 
                label='Password' 
                type='password'
                placeholder='votre mot de passe'
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
            />

            <Button 
                text='Se connecter'
                onClick={login}
                icon = {false}
            />
        </form>
    </main>
    )
}