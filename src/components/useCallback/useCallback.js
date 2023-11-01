import { useCallback, useState } from "react";
import { ItemsList } from "./itemList";

export function Callback() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);
    const styles = {
        color: colored ? 'darkred' : 'black'
    };

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Element ${i + 1}`);
    }, [count]);

    return (
        <div>
            <h1 style={styles}>Колличество элементов: {count}</h1>
            <button className="btn btn-success" onClick={()=> setCount(prev => prev + 1)}>Add</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Delete</button>
            <ItemsList getItems={generateItemsFromAPI}/>
        </div>
    )
}