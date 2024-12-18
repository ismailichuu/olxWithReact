import React,{createContext, useState} from 'react'


export const fireBaseContext = createContext(null)
export const authContext = createContext(null)

export default function Context ({children}) {
    const [user, setUser] = useState(null)

    return(
        <authContext.Provider value={{user}}>
            {children}
        </authContext.Provider>
    )
}