import React, { useEffect } from 'react'
import '../404 Error/404.css'

const NotFound = () => {

    useEffect(() => {
        document.title = '404 - Page Not Found'
      }, [])

  return (
    <div className='error' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a className='home' href='/'>Go Back to Home</a>
    </div>
  )
}


export default NotFound