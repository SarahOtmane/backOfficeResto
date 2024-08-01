import Button from "../components/Button";
import Menu from "../components/Menu";
import SelectLabel from "../components/SelectLabel";
import Titre from "../components/Titre";

import '../css/screen.css';


export default function Table(){
    
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
                </section>
            </div>
        </main>
    )
}