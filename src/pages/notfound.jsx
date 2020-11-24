import React from 'react'
import './notfound.css'
import sad from '../assets/notfound.jpg'

function notFound() {
    return (

          <div className="error">
            <img src={sad} alt="sadpizza" height="500"/>
            <div className="right">
            <h1>Sorry, this Page Not Found</h1>
            <b>error 404</b>
            </div>
          </div>
    )
}

export default notFound
