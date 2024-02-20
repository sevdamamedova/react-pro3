import { createContext, useEffect, useState } from "react";


 const supportedMode = ['light', 'dark',  'green', 'purple', 'pink']
 const emojis = ['light', 'dark',  'green', 'purple', 'pink']
 
 export const ManyModeContext = createContext(supportedMode[0])

 

 const ManyModeContextProvider = ({children}) => {
    const [index, setIndex] = useState(+localStorage.getItem('many-mode'))

    useEffect(() =>{
          localStorage.setItem('many-mode', index)
    },[index])
    const changeMode = () => {
        setIndex((p) => {
            if(p === supportedMode.length -1){
                return 0;
            }
            return ++p;
        })
     }
    return(
        <ManyModeContext.Provider value={[emojis[index], changeMode, supportedMode[index]]}>
            <div className={supportedMode[index].concat('ModeContainer').concat(' mode-container ')}>
                {children} 
            </div>
        </ManyModeContext.Provider>
    )
 }
 export default ManyModeContextProvider;