import { createContext } from "react"

export const InitalUserContext = {
    name: "Juanito",
    lastName: "Pérez"
}

export const UserContext = createContext(InitalUserContext)