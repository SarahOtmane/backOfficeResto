

export default function InputLabel({label, value, type, placeholder, onChange}){
    return(
        <div>
            <label>{label}</label>        
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}