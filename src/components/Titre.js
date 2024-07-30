




export default function Titre({lien, title}){
    return(
        <h1>
            Admin 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8117 11.4673C15.0609 11.7443 15.063 12.1958 14.8163 12.4757L9.94859 18L9.04604 16.9967L13.4672 11.9793L9 7.01366L9.89321 6L14.8117 11.4673Z" fill="#71747E"/>
            </svg>
            <a href={lien}>{title}</a>
        </h1>
    )
}