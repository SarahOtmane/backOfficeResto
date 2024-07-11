import { useState } from "react";

import InputLabel from "../components/InputLable";



export default function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    <main className="backBleu">
        <form>
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
        </form>
    </main>
}