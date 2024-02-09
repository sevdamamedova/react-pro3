
import styles from "./index.module.css"

const Input = ({type = "text", placeholder ='', onChange, value , onEnter}) => {
    
  return (
    <> 
       <input
       className={styles.input}
       onKeyDown={(e) =>{
        if(e.code === 'Enter'){
          onEnter()
        }
       }

       }
       placeholder={placeholder}   
       type={type}
       value={value}
       onChange={({target}) => onChange(target.value)}
    />
    </>
  )
}


export const TextArea = ({type = "text", placeholder ='', onChange, value , onEnter}) => {
    
  return (
    <> 
       <textarea
       style={{
        resize:'none'
       }}
       className={styles.input}
       onKeyDown={(e) =>{
        if(e.code === 'Enter'){
          onEnter()
        }
       }

       }
       placeholder={placeholder}   
       type={type}
       value={value}
       onChange={(e) => onChange(e.target.value)}
    />
    </>
  )
}

export default Input