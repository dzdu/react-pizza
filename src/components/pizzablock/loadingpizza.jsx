import React from 'react'
import ContentLoader from "react-content-loader"


function LoadingPizza() {
    return (
      <ContentLoader
      className="pizza-block"
      speed={2}
      width={300}
      height={500}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="132" cy="142" r="115" /> 
      <rect x="0" y="273" rx="3" ry="3" width="280" height="26" /> 
      <rect x="0" y="310" rx="2" ry="2" width="280" height="70" /> 
      <rect x="0" y="416" rx="3" ry="3" width="72" height="25" /> 
      <rect x="112" y="408" rx="6" ry="6" width="177" height="40" />
    </ContentLoader>
    )
}

export default LoadingPizza
