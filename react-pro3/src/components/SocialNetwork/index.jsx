import Input, { TextArea } from '../Input'
import Button from '../Button'
import styles from './index.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const _url = 'https://65c46cc2dae2304e92e2935c.mockapi.io/posts'

const getPosts = (_setPosts) => {
    axios.get(_url).then(({data}) => {
        _setPosts(data)
    })
}

const SocialNetwork = () => {
   const [posts, setPosts] = useState([])
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   useEffect(() => {
    getPosts(setPosts)
   },[])

   const handleSubmit = () => {
    if(title.length < 3 || description.length < 6){
        alert('heriflerin sayi cox olmalidir')
        return;
    }
    axios.post(_url, {title: title, description }).then(() =>{
        getPosts(setPosts)
    })
    setTitle('')
    setDescription('')
   }

   const onDelete = (id) =>{
    axios.delete(_url + '/' + id).then(() =>{
        getPosts(setPosts)
    })
   }
  return (
    <>
       <div className={styles.inputConrainer}>
       <Input 
       onEnter={handleSubmit}
       value={title}
       onChange={setTitle} placeholder='enter post s  title'/>
       <TextArea 
       onEnter={handleSubmit}
       value={description} 
       onChange={setDescription}  placeholder='enter post s  description'/>
       <Button onClick={handleSubmit} title={'POST IT!'}/>
       </div>
       <div className={styles.postsCantainer}>
            {
                posts.map((post) =>{
                    return (
                        <React.Fragment key={post.id}> 
                            <h4>{post.title}</h4>
                            <p>{post.description}</p>
                            <button onClick={() => onDelete(post.id)}>x</button>
                            <hr/>
                        </React.Fragment>
                    )
                })
            }
       </div>
    </>
  )
}
export default SocialNetwork