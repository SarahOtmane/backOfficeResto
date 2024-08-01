import { useState } from "react";

import Button from "../components/Button";
import Menu from "../components/Menu";
import SelectLabel from "../components/SelectLabel";
import Titre from "../components/Titre";

import '../css/screen.css';


export default function Table(){
    const [tables, setTables] = useState([{
        id: 1,
        numero: 1,
        nbPlaces: 2,
        taken : false
    },{
        id: 2,
        numero: 2,
        nbPlaces: 4,
        taken : true
    },{
        id: 3,
        numero: 3,
        nbPlaces: 2,
        taken : false
    }]);
    
    return(
        <main className="row"> 
            <Menu />
            <div className="main backGris table">
                <Titre lien='/admin/tables' title='Tables' />
                <section className="container">
                    <article className="row head">
                        <h4>Tables</h4>
                        <Button 
                            text="Ajouter un restaurant" 
                            icon = {true}
                        />
                    </article>
                    <form className="row tableForm">
                        <SelectLabel label='Restaurants' name='restaurants' />
                        <SelectLabel label='Salle' name='planTables' />
                        <Button 
                            text='Afficher'
                            icon={false}
                        />
                    </form>
                    <div className="tableau">
                        <table>
                            <thead>
                                <tr>
                                    <th className='left'>Numéro de table</th>
                                    <th>Nombre de places</th>
                                    <th>État</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tables.map((table) =>(
                                    <tr key={table.id}>
                                        <th className='left'>{table.numero}</th>
                                        <th>{table.nbPlaces}</th>
                                        <th>{table.taken ? 'Réservée' : 'Libre'}</th>
                                        <th><Button text='Modifier' icon={true} /></th>
                                        <th><Button text='Supprimer' icon={true} /></th>
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