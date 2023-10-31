import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <div className="navigation">
            <NavLink to="/useState">
            useState
            </NavLink>
            <NavLink to="/useEffect">
            useEffect
            </NavLink>
            <NavLink to="/useRef">
            useRef
            </NavLink>
            <NavLink to="/useMemo">
            useMemo
            </NavLink>
            <NavLink to="/useCallback">
            useCallback
            </NavLink>
            <NavLink to="/useContext">
            useContext
            </NavLink>
            <NavLink to="/useReducer">
            useReducer
            </NavLink>
        </div>
    )
}