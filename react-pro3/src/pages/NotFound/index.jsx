import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Huhu! I think, you,ve been lost!</h1>
        <Link to='/'>Geri don ele bu sahat, bu an</Link>
    </div>
  )
}

export default NotFound