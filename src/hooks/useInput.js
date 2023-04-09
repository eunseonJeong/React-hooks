import { useState } from "react"

//상태관리
export const useInput = () => {
    //state
    const [value, setValue] = useState('');
    //handler
    const handler = e =>{
        setValue(e.target.value)
    }
    return [value ,setValue, handler]
};

export const useInputState = ({type, name, placeholder,value,onChange}) => {
    return (
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        />
    )
};