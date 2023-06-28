import React from 'react'
import LegendKey from './LegendKey'

function Legend({ legendData }) {

  
  //MAPS LEGEND DETAILS
  const legend = legendData.map((data) => {
    return (
      <LegendKey key={data.id}
        color={data.color}
        description={data.description}
        title={data.title} />
    )
  })

  return (
    <div className='legend'>
      {legend}
    </div>
  )
}

export default Legend