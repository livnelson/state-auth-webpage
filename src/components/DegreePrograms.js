import React, { useState } from 'react'
import '../styles/DegreePrograms.css'


function DegreePrograms({ degreeData }) {
  const [selectedTitle, setSelectedTitle] = useState(null)
  const [selectedStates, setSelectedStates] = useState([])

  const handleTitleClick = (title) => {
    if (selectedTitle === title) {
      // If the clicked title is already selected, clear the selection
      setSelectedTitle(null)
      setSelectedStates([])
    } else {
      // Otherwise, update the selected title and states
      const { stateList } = degreeData[title]
      setSelectedTitle(title)
      setSelectedStates(stateList)
    }
  }

  console.log(degreeData)
  // console.log(stateData)

  return (
    <div className='degree-section'>
      <h2 className='section-header'>Our Degree Programs</h2>
      <p className='section-description'>Click on an online degree program button below to search authorizations/approvals by state.</p>
      <div >
        {/* <DegreeButtons degreeData={degreeData} degreeTitle={degreeTitle} handleTitleClick={handleTitleClick} selectedTitle={selectedTitle} selectedStates={selectedStates} /> */}
      </div>
      <div className='program-buttons'>
        {Object.keys(degreeData).map((title) => (
          <div key={title}>
            <button className='program-button' onClick={() => handleTitleClick(title)}>{degreeData[title].title}</button>
            {selectedTitle === title && (
              <div className='state-list'>
                {selectedStates.length > 0 && (
                  <p><strong>Available States:</strong> {selectedStates.map((state) => state.toUpperCase()).join(', ')}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DegreePrograms