import { useEffect, useState } from 'react';

import Select from 'react-select';

export default function SelectForm({name}){
    const [options, setOptions] = useState([]);

    useEffect(()=>{
        const getOptions = async() =>{
            try {
                let formattedOptions = [];
                if(name ==='restaurants'){
                    formattedOptions=[{
                        value: "Le Végétal", label: "Le Végétal"
                    }, {
                        value: "Chez Félix", label: "Chez Félix"
                    }];
                }else if(name==='planTables'){
                    formattedOptions=[{
                        value: "Terrasse", label: "Terrasse"
                    }, {
                        value: "1er étage", label: "1er étage"
                    }];
                }

                setOptions(formattedOptions);

            } catch (error) {
                console.error('Erreur lors de la récupération des options:', error);
            }
        }

        getOptions();
    }, [name]);

    const valueStyles = {
        control: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: 'white',
            borderColor: isFocused ? '#BDDEB4' : 'black',
            boxShadow: isFocused ? '0 0 0 1px #BDDEB4' : styles.boxShadow,
            '&:hover': {
                borderColor: isFocused ? '#BDDEB4' : 'black',
            },
            height: '4rem',
        }),
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            backgroundColor: isSelected
                ? '#BDDEB4'
                : isFocused
                    ? 'rgba(189, 222, 180, 0.4)'
                    : '#F6F6F6',
            color: '#1E1E1E',
            cursor: 'default',
            ':active': {
                ...styles[':active'],
                backgroundColor: isSelected ? '#BDDEB4' : 'rgba(189, 222, 180, 0.4)',
            },
        }),
        input: (styles) => ({ ...styles, color: '#1E1E1E' }),
        singleValue: (styles) => ({ ...styles, color: '#1E1E1E' }),
    };

    let placeholder = "";

    if (name === 'restaurants') placeholder = "Restaurant";
    else if (name === 'planTables') placeholder = "Salle";

    return(
        <Select
            className="input"
            classNamePrefix="select"
            placeholder={placeholder}
            isClearable={true}
            name={name}
            options={options}
            styles={valueStyles}
        />
    )
}