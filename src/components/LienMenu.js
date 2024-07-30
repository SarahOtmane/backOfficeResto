


export default function LienMenu({lien, text, svg}){

    return(
        <a href={lien} className="lienNavigation">
            <img src={svg} alt='icon' />
            <span>{text}</span>
        </a>
    )
}