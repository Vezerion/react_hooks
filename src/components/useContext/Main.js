import { useAlert } from "./AlertContext"

export function Main({toggleAlert}) {
    const {show} = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button className="btn btn-success" onClick={() => show('This Text is from Main.js')}>Показать alert</button>
        </>
    )
}