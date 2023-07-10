import React from 'react'
import '../styles/ProgramDetails.css'

function ProgramDetails({ selectedTitle, selectedStates, showDetails, setShowDetails }) {

  return (
    <div className='program-details' onClick={() => setShowDetails(!showDetails)}>
      <p className='program-modal-close'>ⓧ</p>
      <h5>{selectedTitle}</h5>
      <p><strong>Available States:</strong> {selectedStates.map((state) => state.toUpperCase()).join(', ')}</p>
      <button className='button'>Learn More</button><button className='button'>Apply Now</button>
    </div>
  )
}

export default ProgramDetails