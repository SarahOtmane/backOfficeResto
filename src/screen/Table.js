import Menu from "../components/Menu";
import Titre from "../components/Titre";




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
                </section>
            </div>
        </main>
    )
}