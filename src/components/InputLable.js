

export default function InputLabel({label, value, type, placeholder, onChange}){
    return(
        <div className="inputLabel column">
            <label className="textBold">{label}</label>        
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}