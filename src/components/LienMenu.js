


export default function LienMenu({lien, text, svg}){

    return(
        <a href={lien}>
            <img src={svg} alt='icon' />
            <span>{text}</span>
        </a>
    )
}