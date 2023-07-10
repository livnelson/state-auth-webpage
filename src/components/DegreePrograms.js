import React, { useState } from 'react'
import ProgramDetails from './ProgramDetails'
import '../styles/DegreePrograms.css'

function DegreePrograms({ degreeData }) {
  const [selectedTitle, setSelectedTitle] = useState(null)
  const [selectedStates, setSelectedStates] = useState([])
  const [showDetails, setShowDetails] = useState(false)

  const handleTitleClick = (title) => {
    const { stateList } = degreeData[title]
    setSelectedTitle(selectedTitle === title ? null : title)
    setSelectedStates(selectedTitle === title ? [] : stateList)
    setShowDetails(selectedTitle !== title)
  }

  console.log(degreeData)
  // console.log(stateData)

  return (
    <div className='degree-section'>
      <h2 className='section-header'>Our Degree Programs</h2>
      <p className='section-description'>Click on an online degree program button below to search authorizations/approvals by state.</p>
      <div className='program-buttons'>
        {Object.keys(degreeData).map((title) => (
          <div key={title}>
            <button className='big-button' onClick={() => handleTitleClick(title)}>{degreeData[title].title}</button>
            {selectedTitle === title && showDetails ? (
              <div className='state-list'>
                {selectedStates.length > 0 && (
                  <div className='program-details-modal'>
                    <ProgramDetails
                      degreeData={degreeData}
                      selectedTitle={selectedTitle}
                      selectedStates={selectedStates}
                      showDetails={showDetails}
                      setShowDetails={setShowDetails}
                    />
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DegreePrograms
