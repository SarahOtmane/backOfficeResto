import { useEffect, useState } from 'react';

import Menu from '../components/Menu';
import Titre from '../components/Titre';

import '../css/planTable.css';



export default function PlanTable(){
    const [restos, setRestos] = useState([]);
    const [planTables, setPlanTables] = useState([]);

    useEffect(() => {
        setRestos([{
            id : 1,
            name: 'Le Végétal',
            nbSalles : 2,
            nbPlaces : 50
        }, {
            id : 1,
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
            id_resto : 1
        }]);
    }, []);

    return(
        <main className="row">
            <Menu />
            <div className='main backGris plantable'>
                <Titre lien='/admin/planTable' title='Plan de tables' />
                <section className='container'>
                    <article className='row head'>
                        <h4>Plan de tables</h4>
                        
                    </article>
                    <div>

                    </div>
                </section>
            </div>
        </main>
    )
}