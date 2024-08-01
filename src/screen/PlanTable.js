import { useEffect, useState } from 'react';

import Menu from '../components/Menu';
import Titre from '../components/Titre';

import '../css/screen.css';



export default function PlanTable(){
    const [restos, setRestos] = useState([]);
    const [planTables, setPlanTables] = useState([]);
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

        setPlanTables([{
            id : 1,
            salle: '1er étage',
            nbTables : 10,
            nbPlaces : 30,
            full : false,
            id_resto : 1
        }, {
            id : 2,
            salle: 'Terrasse',
            nbTables : 6,
            nbPlaces : 20,
            full : false,
            id_resto : 1
        }, {
            id : 3,
            salle: 'Salle',
            nbTables : 6,
            nbPlaces : 15,
            full : false,
            id_resto : 2
        }]);
    }, []);

    const handleClick = (id) => { 
        setBtnSelected(id);
    };

    return(
        <main className="row">
            <Menu />
            <div className='main backGris plantable'>
                <Titre lien='/admin/planTable' title='Plan de tables' />
                <section className='container'>
                    <article className='row head'>
                        <h4>Plan de tables</h4>
                    </article>
                    <div className='resto_card row'>
                        {restos.map((resto) => <button key={resto.id} className={btnSelected===resto.id ? 'selected' : ''} onClick={() => handleClick(resto.id)}>{resto.name}</button>)}
                    </div>
                    <div className='tableau'>
                    <table>
                        <thead>
                            <tr>
                                <th className='left'>Salle</th>
                                <th>Nombres de tables</th>
                                <th>Nombres de places</th>
                                <th>Etat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planTables
                            .filter(plan => plan.id_resto === btnSelected)
                            .map((plan) => (
                                <tr key={plan.id}>
                                    <th className='left'>{plan.salle}</th>
                                    <th>{plan.nbTables}</th>
                                    <th>{plan.nbPlaces}</th>
                                    <th>{plan.full ? 'Complet' : 'Non complet'}</th>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
            </div>
                </section>
            </div>
        </main>
    )
}