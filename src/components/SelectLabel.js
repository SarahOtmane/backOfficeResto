import SelectForm from "./Select";


export default function SelectLabel({command, setCommand, name, label}){
    return(
        <>
            <label>{label}</label>
            <SelectForm name={name} command={command} setCommand={setCommand} />
        </>
    )
}
