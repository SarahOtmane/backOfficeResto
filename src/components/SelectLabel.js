import SelectForm from "./Select";


export default function SelectLabel({name, label}){
    return(
        <>
            <label>{label}</label>
            <SelectForm name={name} />
        </>
    )
}
