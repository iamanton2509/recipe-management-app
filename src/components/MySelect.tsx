import {ISelect} from "../types";

const MySelect = ({defaultValue, onChange, value, options}: ISelect) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} className="custom-select">
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option> 
            )}
        </select>
    ); 
}

export default MySelect;