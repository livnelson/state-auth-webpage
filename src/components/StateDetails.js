import React, { useEffect, useState } from 'react'

function StateDetails({ name, programs }) {

  // const googleURL = "https://script.google.com/macros/s/AKfycbwyg7lpU1JqCDWtwh4OdSBQyJ7MmkfuDwqo6BKiHDxAkZuJrrnCUGEklrV0XTBN1gmcPQ/exec"


  // useEffect(() => {
  //   fetch(googleURL)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setStateDetails(data);
  //     });
  // }, []);

  // const handleStateClick = () => {
  //   setShowDetails(!showDetails);
  // };

  return (
    <div>
      <p>{name}</p>
      <p>{programs}</p>
    </div>


  )
}

export default StateDetails
