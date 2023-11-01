import { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2;
}

export function Memo() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    useEffect(() => {
        console.log('styles changed')
    }, [styles])

    return (
        <div>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button className="btn btn-success" onClick={()=> setNumber(prev => prev + 1)}>Add 1</button>
            <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Delete 1</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
        </div>
    )
}