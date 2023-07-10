import React, { useEffect, useState } from 'react'
import FullerAuth from './FullerAuth'
import USStates from './USStates'
import FundingInfo from './FundingInfo'
import Moving from './Moving'
import DegreePrograms from './DegreePrograms'
import Legend from './Legend'
import '../styles/App.css'
import '../styles/LegendKey.css'

function App() {
  const [legendData, setLegendData] = useState([])
  const [degreeData, setDegreeData] = useState({})
  const [stateData, setStateData] = useState([])
  const [stateDetails, setStateDetails] = useState({})

  const googleURL = "https://script.google.com/macros/s/AKfycbwyg7lpU1JqCDWtwh4OdSBQyJ7MmkfuDwqo6BKiHDxAkZuJrrnCUGEklrV0XTBN1gmcPQ/exec"

  useEffect(() => {
    //Fetch Legend Details
    fetch(googleURL + '?action=getlegend')
      .then(res => res.json())
      .then(resData => {
        // console.log(resData)
        setLegendData(resData)
      })

    //Fetch Degree Programs
    fetch(googleURL + '?action=getdegrees')
      .then(res => res.json())
      .then(resData => {
        console.log(resData)
        setDegreeData(resData)
      })

    //Fetch Degree Programs with States
    fetch(googleURL + '?action=getdegrees')
      .then(res => res.json())
      .then(resData => {
        console.log(resData)

        const separatedData = {}

        Object.keys(resData).forEach(title => {
          const id = resData[title].id
          const stateList = resData[title].stateList

          separatedData[title] = { id, stateList }
        })
        // console.log(separatedData);
        setStateData(separatedData)
      })

    //Fetch State details
    fetch(googleURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStateDetails(data)
      })
  }, [])

  return (
    <div className="app">
      <FullerAuth />
      <USStates stateDetails={stateDetails} legendData={legendData} />
      <FundingInfo />
      <Moving />
      <div className='page-break' />
      <DegreePrograms degreeData={degreeData} stateData={stateData} />
      <Legend legendData={legendData}/>
    </div>
  )
}

export default App
