import React from "react";
import { Alert } from "./Alert";
import { Main } from "./Main";
import { AlertProvider } from "./AlertContext";

export function Context() {
    return (
        <AlertProvider value={alert}>
            <div>
            <Alert/>
            <Main toggleAlert={() => {}}/>
        </div>
        </AlertProvider>
        
    )
}