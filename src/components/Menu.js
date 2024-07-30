import resto from '../assets/icons/resto.svg';
import planTable from '../assets/icons/planTable.svg';
import info from '../assets/icons/info.svg';
import reservation from '../assets/icons/reservations.svg';
import utilisateurs from '../assets/icons/utilisateur.svg';

import LienMenu from './LienMenu';



export default function Menu(){
    const navigation = [{
        text : 'Restaurants',
        link : '/restaurants',
        icon : resto
    },{
        text : 'Plan Table',
        link : '/planTable',
        icon : planTable
    },{
        text : 'Informations',
        link : '/informations',
        icon : info
    },{
        text : 'Réservations',
        link : '/reservations',
        icon : reservation
    },{
        text : 'Utilisateurs',
        link : '/utilisateurs',
        icon : utilisateurs
    }]

    return (
        <ul>
            {navigation.map(nav => <li>
                <LienMenu text={nav.text} svg={nav.icon} lien={nav.link} />
            </li>)}
        </ul>
    )
}