import { useState } from "react";


function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const clear = () => setValue('');
    return {
        bind: {value, onChange},
        value,
        clear
    }
}

export function Custom() {
    const input = useInput('');
    const lastName = useInput('');
    return (
        <div>
            <input type="text" {...input.bind}/>
            <input type="text" {...lastName.bind}/>
            <h1>{input.value} {lastName.value}</h1>
            <button className="btn btn-warning" onClick={() => input.clear()}>Clear Name</button>
            <button className="btn btn-warning" onClick={() => lastName.clear()}>Clear LastName</button>
        </div>
    )
}