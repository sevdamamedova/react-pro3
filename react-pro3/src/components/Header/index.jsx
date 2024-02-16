import styles from "./index.module.css"
import Navigation from '../Navigation'
import { useContext } from "react"
import { AuthContext } from "../../context-api/AuthContext"
 

const Header = () => {
    const [data, setData] = useContext(AuthContext)
    
    return (
        <header className={styles.header}>
            <img className={styles.img} src="/vite.svg" alt="vite logo" />
            <h1 className={styles.header_heading}>Our First React {data.name}</h1>
            <button onClick={() =>{
                setData((pre) => ({...pre, name: 'Hafez'}))
            }}>
                click</button>
            <Navigation/>
        </header>
    )
}
export default Header; 