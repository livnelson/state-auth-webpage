import React from 'react'
import '../styles/LegendKey.css'

function LegendKey({ color, description, title }) {
  return (
    <div>
      <div className='legend-details'>
      <div className='legend-color' style={{ background: `${color}`}}></div>
      <div className='legend-info'>
        <h3 className='title'>{title}</h3>
        
        <p className='description'>{description}</p>
      </div>
      </div>
    </div>
  )
}

export default LegendKey