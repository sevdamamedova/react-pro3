import { useEffect, useState } from "react";
import { createContext } from "react";


export const ModeContext = createContext(false)

const initialValue = localStorage.getItem('isDark') !== 'false'

const ModeContextProvider = ({children}) =>{
    const [isDarkMode, setIsDarkMode] = useState(initialValue)

    useEffect(() =>{
        localStorage.setItem('isDark', isDarkMode)
    },[isDarkMode])

    const modeToggler = () => {
        setIsDarkMode((pre) => !pre)
    }
    return(
        <ModeContext.Provider value = {[isDarkMode, modeToggler]}>
            <div className={isDarkMode ? "darkModeContainer mode-container" : 'mode-container'}>
                {children}
            </div>
        </ModeContext.Provider>
    )
}
export default ModeContextProvider