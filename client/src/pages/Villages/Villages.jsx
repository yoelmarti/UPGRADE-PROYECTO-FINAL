import React, { useEffect, useState } from 'react'

// const INITIAL_STATE_VILLAGES = {
//   "name": "",
//   "location": {
//       "region": "",
//       "province": "",
//   },
//   "population": "",
//   "contact": {
//       "phone": "",
//       "email": ""
//   }   
// }


const Villages = () => {
  const [villagesList, setVillagesList] = useState([])
    
  useEffect(()=>{
    fetch('http://localhost:4000/pueblos')
      .then((res)=>{ return res.json()})
      .then((data) => {
        setVillagesList(data)
  })
  },[])
    
  const handleChange = (event) =>{
      event.preventDefault();
  }

  return (
    <div>
      <div className='text-center'>
        <input type="text" onChange={handleChange} className='w-[300px] border-2 rounded-md border-black'></input>
      </div>
      <div className='flex flex-wrap justify-center'>
        {villagesList.map((village)=>{return(
          <div key={village.name} className="m-2 w-[200px] h-[300px] border-2 border-black rounded-md">
            <p>{village.name}</p>
            <p>{village.location.region}</p>
            <p>{village.location.province}</p>
          </div>
        )})}
      </div>
    </div>
  )
}

export default Villages;