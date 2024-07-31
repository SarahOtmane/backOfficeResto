
import Menu from '../components/Menu';
import Titre from '../components/Titre';

import '../css/planTable.css';



export default function PlanTable(){
    return(
        <main className="row">
            <Menu />
            <div className='main backGris plantable'>
                <Titre lien='/admin/planTable' title='Plan de tables' />
                <section className='container'>
                    <article className='row head'>
                        <h4>Plan de tables</h4>
                        
                    </article>
                </section>
            </div>
        </main>
    )
}