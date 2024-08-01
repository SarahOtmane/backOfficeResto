import { useEffect, useState } from "react";

import Menu from "../components/Menu";
import Titre from "../components/Titre";



export default function Reservation(){
    const [restos, setRestos] = useState([]);
    const [btnSelected, setBtnSelected] = useState(1);

    useEffect(() => {
        setRestos([{
            id : 1,
            name: 'Le Végétal',
            nbSalles : 2,
            nbPlaces : 50
        }, {
            id : 2,
            name: 'Le Félix',
            nbSalles : 1,
            nbPlaces : 15
        }]);
    }, []);

    const handleClick = (id) => { 
        setBtnSelected(id);
    };

    return(
        <main className='row'>
            <Menu />
            <div className='main backGris restos'>
                <Titre lien='/admin/reservation' title='Reservation' />
                <section className='container'>
                    <article className='row head'>
                        <h4>Reservations</h4>
                    </article>
                    <div className='resto_card row'>
                        {restos.map((resto) => <button key={resto.id} className={btnSelected===resto.id ? 'selected' : ''} onClick={() => handleClick(resto.id)}>{resto.name}</button>)}
                    </div>
                    <div className='tableau'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='left'>Date</th>
                                    <th>Heure</th>
                                    <th>Nombres de places</th>
                                    <th>Email</th>
                                    <th>Telephone</th>
                                    <th>Nom</th>
                                    <th>Salle</th>
                                    <th>Tables</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    )
} 