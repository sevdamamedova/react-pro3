import styles from "./index.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src="/vite.svg" alt="vite logo" />
            <h1 className={styles.header_heading}>Our First React</h1>

        </header>
    )
}
export default Header; 