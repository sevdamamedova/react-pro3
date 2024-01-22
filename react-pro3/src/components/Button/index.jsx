import styles from './index.module.css'

export default function Button({title, onClick}){

    return(
        <button className={styles.button} onClick={onClick}>
            {title}
        </button>
    )
}