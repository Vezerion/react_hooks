import { useAlert } from "./AlertContext"

export function Alert() {

    const alert = useAlert();
    if(!alert.visible) return null
    return (
        <div className="alert alert-danger" onClick={alert.hide}>
            {alert.text}
        </div>
    )
}