import styles from "./index.module.css"
import Navigation from '../Navigation'
import { useContext } from "react"
import { AuthContext } from "../../context-api/AuthContext"
import { ModeContext } from "../../context-api/ModeContext"
import { ManyModeContext } from "../../context-api/ManyModeContext"
 

const Header = () => {
    const [data, setData] = useContext(AuthContext)
    // const [isDark, changeMode] = useContext(ModeContext)
    const [emoji, changeManyMode, btnClass] = useContext(ManyModeContext)
    
    return (
        <header className={styles.header}>
            <img className={styles.img} src="/vite.svg" alt="vite logo" />
            <h1 className={styles.header_heading}>Our First React {data.name}</h1>
            <button onClick={() => {
                setData((pre) => ({...pre, name: 'Hafez'}))
            }}>click</button>
            {/* <button onClick={changeMode}>{isDark ? 'sun' : 'moon' } </button> */}
            <button onClick={changeManyMode} className={`many-mode-button ${btnClass.concat('Btn')}`}>{emoji}</button>
            <Navigation/>
        </header>
    )
}
export default Header; 