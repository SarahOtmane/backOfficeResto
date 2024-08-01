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
                    </article>
                    <form className="row">
                        <SelectLabel label='Restaurants' name='restaurants' />
                        <SelectLabel label='Salle' name='planTables' />
                    </form>
                </section>
            </div>
        </main>
    )
}