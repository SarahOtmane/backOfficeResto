import resto from '../assets/icons/resto.svg';
import planTable from '../assets/icons/planTable.svg';
import info from '../assets/icons/info.svg';
import reservation from '../assets/icons/reservations.svg';
import utilisateurs from '../assets/icons/utilisateur.svg';

import LienMenu from './LienMenu';



export default function Menu(){
    const navigation = [{
        text : 'Restaurants',
        link : '/admin/restaurants',
        icon : resto
    },{
        text : 'Plan Table',
        link : '/admin/planTable',
        icon : planTable
    },{
        text : 'Informations',
        link : '/admin/informations',
        icon : info
    },{
        text : 'Réservations',
        link : '/admin/reservations',
        icon : reservation
    },{
        text : 'Utilisateurs',
        link : '/admin/utilisateurs',
        icon : utilisateurs
    }]

    return (
        <ul className='navigation'>
            <h1>Admin</h1>
            
            {navigation.map(nav => <li>
                <LienMenu text={nav.text} svg={nav.icon} lien={nav.link} />
            </li>)}
        </ul>
    )
}