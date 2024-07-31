import Menu from "../components/Menu";
import Titre from "../components/Titre";



export default function Reservation(){

    return(
        <main className='row'>
            <Menu />
            <div className='main backGris restos'>
                <Titre lien='/admin/restaurants' title='Restaurants' />
            </div>
        </main>
    )
} 