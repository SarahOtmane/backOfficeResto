import SelectForm from "./Select";


export default function SelectLabel({name, label}){
    return(
        <div className="column">
            <label>{label}</label>
            <SelectForm name={name} />
        </div>
    )
}
