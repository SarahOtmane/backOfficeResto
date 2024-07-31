import { useState } from 'react';

import Button from '../components/Button';
import Menu from '../components/Menu';
import Titre from '../components/Titre';

import '../css/restos.css';


export default function Restos(){
    const [recherche, setRecherche] = useState('');

    const addRestaurent = (e) =>{
        e.preventDefault();
    }

    return(
        <main className='row'>
            <Menu />
            <div className='main backGris restos'>
                <Titre lien='/admin/restaurants' title='Restaurants' />
                <section className='container'>
                    <article className='row head'>
                        <h4>Restaurants</h4>
                        <Button 
                            text="Ajouter un restaurant" 
                            icon = {true}
                            onClick={addRestaurent}
                        />
                        <input
                            placeholder='Recherche'
                            type='text'
                            value={recherche}
                            onChange={(e) => setRecherche(e.target.value)}
                            className='recherche'
                        />
                        <svg className='svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.22425 16.4798C11.2791 16.4798 13.2497 15.6635 14.7027 14.2105C16.1557 12.7575 16.9719 10.7869 16.9719 8.73206C16.9719 6.67725 16.1557 4.70659 14.7027 3.25362C13.2497 1.80065 11.2791 0.984375 9.22425 0.984375C7.16944 0.984375 5.19878 1.80065 3.74581 3.25362C2.29283 4.70659 1.47656 6.67725 1.47656 8.73206C1.47656 10.7869 2.29283 12.7575 3.74581 14.2105C5.19878 15.6635 7.16944 16.4798 9.22425 16.4798Z" stroke="#1E1E1E" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5224 19.0156L14.5781 15.0713" stroke="#1E1E1E" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </article>
                </section>
            </div>
        </main>
    )
}