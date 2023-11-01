import { useState } from "react";
export function State() {
    const [counter, setCounter] = useState(0)
    function increment() {
        setCounter(counter + 1);
    }
    function decrement() {
        setCounter(counter - 1);
    }
    return (
        <div>
            <p>
                <code>useState</code> - хук для работы с состоянием приложения. Для того чтобы воспользоваться хуком необходимо его проимпортировать. <br/>Пример: <br/><code>import {`{useState}`} from 'react'</code> <br/> <code>useState</code> возвращает кортеж, кортеж это массив с заранее определенными элементами, где первый элемент это начальное состояние, которое мы передаем в качестве параметра в хук, а второй элемент это функция позволяющая изменять состояние <br/> Пример: <br/> <code>const [counter, setCounter] = useState(0);</code> <br/> <code>useState</code> - это асинхроный хук и он не меняет состояние сразу, он должен ждать повторного рендеринга компонента. <br/>Пример: <br/> <code> function increment() {`{`} <br/> &nbsp; &nbsp;setCounter(counter + 1); <br/> &nbsp; &nbsp;setCounter(counter + 1); <br/>{`}`}</code> <br/> В данном примере при вызове функции <code>increment()</code>, counter будет увеличиваться не на 2, а на 1, так как не произошло цикла рендеринга. Для решения этой проблемы нужно сделать следующее. <code>setCounter</code> может принимать callback функцию, которая в себя принимает предыдущее состояние, из этой callback функции нужно вернуть новое состояние, которое будет спользовать предыдущее состояние. <br/> Пример: <br/> <code> function increment() {`{`} <br/> &nbsp; &nbsp;setCounter((prev) ={`>`} {`{`} <br/> &nbsp; &nbsp; &nbsp; &nbsp;return prev + 1<br/>&nbsp; &nbsp;{`}`}); <br/> &nbsp; &nbsp;setCounter((prev) ={`>`} {`{`} <br/> &nbsp; &nbsp; &nbsp; &nbsp;return prev + 1<br/>&nbsp; &nbsp;{`}`});<br/>{`}`}</code> <br/> или короче <br/> <code> function increment() {`{`} <br/> &nbsp; &nbsp;setCounter(prev ={`>`} prev + 1); <br/> &nbsp; &nbsp;setCounter(prev ={`>`} prev + 1); <br/>{`}`}</code>. <br/> В данном примере counter будет увеличен на 2.
            </p>


            <h1>Counter: {counter}</h1>
            <button className="btn btn-success" onClick={increment}>Add</button>
            <button className="btn btn-success" onClick={decrement}>Remove</button>
        </div>
    )
}