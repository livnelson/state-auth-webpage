import React, { useEffect, useState } from 'react'
import Legend from '../components/Legend'
import FullerAuth from './FullerAuth'
import FundingInfo from './FundingInfo'
import DegreePrograms from './DegreePrograms'
import '../styles/App.css'
import '../styles/LegendKey.css'
import Moving from './Moving'


function App() {
  const [legendData, setLegendData] = useState([])
  const [degreeData, setDegreeData] = useState({})
  const [stateData, setStateData] = useState([])

  const googleURL = "https://script.google.com/macros/s/AKfycbwyg7lpU1JqCDWtwh4OdSBQyJ7MmkfuDwqo6BKiHDxAkZuJrrnCUGEklrV0XTBN1gmcPQ/exec"

  useEffect(() => {
    //FETCH LEGEND DETAILS
    fetch(googleURL + '?action=getlegend')
      .then(res => res.json())
      .then(resData => {
        // console.log(resData)
        setLegendData(resData)
      })

    //FETCH DEGREE PROGRAMS
    fetch(googleURL + '?action=getdegrees')
      .then(res => res.json())
      .then(resData => {
        // console.log(resData)
        setDegreeData(resData)
      })

    //FETCH DEGREE PROGRAMS WITH STATES
    fetch(googleURL + '?action=getdegrees')
    .then(res => res.json())
    .then(resData => {
      // console.log(resData);
  
      const separatedData = {};
  
      Object.keys(resData).forEach(title => {
        const id = resData[title].id;
        const stateList = resData[title].stateList;
  
        separatedData[title] = { id, stateList };
      });
  
      // console.log(separatedData);
      setStateData(separatedData)
    });
  }, [])

  fetch(googleURL) 
    .then(res => res.json()) 
    .then(data => {
      console.log(data)
    })
  


  return (
    <div className="app">
      <FullerAuth />
      <Legend legendData={legendData} />
      <FundingInfo />
      <DegreePrograms degreeData={degreeData} stateData={stateData} />
      <Moving />
    </div>
  )
}

export default App
