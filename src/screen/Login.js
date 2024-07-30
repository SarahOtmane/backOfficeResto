import { useState } from "react";

import InputLabel from "../components/InputLable";
import Button from "../components/Button";

import '../css/login.css';
import logo from '../assets/logo.jpg';



export default function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const login = () =>{
        console.log(formData);
    }

    return(
        <main className="login w-100 h-100">
            <img src={logo} alt='logo' />
            <h1>Admin</h1>
        <form className="m-auto backBleu">
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
            />
        </form>
    </main>
    )
}