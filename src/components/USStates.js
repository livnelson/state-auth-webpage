import React, { useState, useEffect } from 'react'

function USStates() {
  const [stateDetails, setStateDetails] = useState({})
  const [selectedStateCode, setSelectedStateCode] = useState(null)

  const googleURL = "https://script.google.com/macros/s/AKfycbwyg7lpU1JqCDWtwh4OdSBQyJ7MmkfuDwqo6BKiHDxAkZuJrrnCUGEklrV0XTBN1gmcPQ/exec"

  //Fetch dates details that include degree programs
  useEffect(() => {
    fetch(googleURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStateDetails(data)
      })
  }, [])

  // Open State modal
  const handleStateClick = (stateCode) => {
    setSelectedStateCode((prevSelectedStateCode) => {
      // Toggle the selected state if the same button is clicked again
      if (prevSelectedStateCode === stateCode) {
        return null // Deselect the state
      } else {
        return stateCode // Select the clicked state
      }
    })
  }

  // List of US States
  const statesList = {
    AL: { fullName: 'Alabama' },
    AK: { fullName: 'Alaska' },
    AZ: { fullName: 'Arizona' },
    AR: { fullName: 'Arkansas' },
    CA: { fullName: 'California' },
    CO: { fullName: 'Colorado' },
    CT: { fullName: 'Connecticut' },
    DE: { fullName: 'Delaware' },
    DC: { fullName: 'District Of Columbia' },
    FL: { fullName: 'Florida' },
    GA: { fullName: 'Georgia' },
    HI: { fullName: 'Hawaii' },
    ID: { fullName: 'Idaho' },
    IL: { fullName: 'Illinois' },
    IN: { fullName: 'Indiana' },
    IA: { fullName: 'Iowa' },
    KS: { fullName: 'Kansas' },
    KY: { fullName: 'Kentucky' },
    LA: { fullName: 'Louisiana' },
    ME: { fullName: 'Maine' },
    MD: { fullName: 'Maryland' },
    MA: { fullName: 'Massachusetts' },
    MI: { fullName: 'Michigan' },
    MN: { fullName: 'Minnesota' },
    MS: { fullName: 'Mississippi' },
    MO: { fullName: 'Missouri' },
    MT: { fullName: 'Montana' },
    NE: { fullName: 'Nebraska' },
    NV: { fullName: 'Nevada' },
    NH: { fullName: 'New Hampshire' },
    NJ: { fullName: 'New Jersey' },
    NM: { fullName: 'New Mexico' },
    NY: { fullName: 'New York' },
    NC: { fullName: 'North Carolina' },
    ND: { fullName: 'North Dakota' },
    OH: { fullName: 'Ohio' },
    OK: { fullName: 'Oklahoma' },
    OR: { fullName: 'Oregon' },
    PA: { fullName: 'Pennsylvania' },
    RI: { fullName: 'Rhode Island' },
    SC: { fullName: 'South Carolina' },
    SD: { fullName: 'South Dakota' },
    TN: { fullName: 'Tennessee' },
    TX: { fullName: 'Texas' },
    UT: { fullName: 'Utah' },
    VT: { fullName: 'Vermont' },
    VA: { fullName: 'Virginia' },
    WA: { fullName: 'Washington' },
    WV: { fullName: 'West Virginia' },
    WI: { fullName: 'Wisconsin' },
    WY: { fullName: 'Wyoming' }
  }

  // Create a button for each state
  const mappedStates = Object.keys(statesList).map((stateCode) => (
    <button
      key={stateCode}
      className={`big-button ${selectedStateCode === stateCode ? 'active' : ''}`}
      onClick={() => handleStateClick(stateCode)}
    >
      {statesList[stateCode].fullName}
    </button>
  ))

  // Close modal window
  function closeModal() {
    setSelectedStateCode(null)
  }

  return (
    <>
      <h6 className='section-description'>Click on a state button below to view authorizations/approvals</h6>
      <div className='program-buttons'>
        {mappedStates}
        {selectedStateCode && (
          <div className='program-details-modal'>
            <div className='program-details'>
              <p className='program-modal-close' onClick={closeModal}>ⓧ</p>
              <h3>{stateDetails[selectedStateCode].fullName}</h3>
              <p>Degree Programs: {stateDetails[selectedStateCode].longDescription}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default USStates