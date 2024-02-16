import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({})


const AuthContextProvider = ({children}) =>{
    const [data, setData] = useState({username: 'Alion', name: 'Ali'})
    
    return(
        <AuthContext.Provider value={[data, setData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider