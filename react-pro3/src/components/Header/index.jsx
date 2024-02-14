import styles from "./index.module.css"
import Navigation from '../Navigation'
 

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src="/vite.svg" alt="vite logo" />
            <h1 className={styles.header_heading}>Our First React</h1>
            <Navigation/>
        </header>
    )
}
export default Header; 