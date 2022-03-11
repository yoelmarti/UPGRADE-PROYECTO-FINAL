import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
  const [provincia, setProvince] = useState("");
  
  useEffect(()=>{
    // console.log(provincia)
    try {
      fetch('http://localhost:4000/villages')
        .then((res)=>{ return res.json()})
        .then((data) => {
          const villages = data.data.villages;
          if(provincia === ""){
            setVillagesList(villages)
          }else{
            const location = villages.filter(element => element.location.province === provincia)
            setVillagesList(location)
          }
    })
      
    } catch (error) {
      console.error(error)
    }
  },[provincia])

  const handleChange = (event)=>{ 
    setProvince(event.target.value);
    }

  return (
    <div>
      <div className='text-center'>
        <select onChange={handleChange} className='w-[300px] border-2 rounded-md border-black'>
          <option value="">Todas</option>
          <option value="Albacete">Albacete</option>
          <option value="Álava">Álava</option>
          <option value="Ávila">Ávila</option>
          <option value="Burgos">Burgos</option>
          <option value="Cuenca">Cuenca</option>
          <option value="Guadalajara">Guadalajara</option>
          <option value="Huelva">Huelva</option>
          <option value="La Rioja">La Rioja</option>
          <option value="León">León</option>
          <option value="Málaga">Málaga</option>
          <option value="Navarra">Navarra</option>
          <option value="Palencia">Palencia</option>
          <option value="Salamanca">Salamanca</option>
          <option value="Soria">Soria</option>
          <option value="Teruel">Teruel</option>
          <option value="Valladolid">Valladolid</option>
          <option value="Zamora">Zamora</option>
        </select>
        {/* <input value={provincia} onChange={handleChange} className='w-[300px] border-2 rounded-md border-black'></input> */}
        {/* <button onClick={searchProvincia}>Buscar</button> */}
      </div>
      <div className='flex flex-wrap justify-center'>
         {villagesList.map((village)=>{return(
              <div key={village._id} className="m-2 w-[200px] h-[300px] border-2 border-black rounded-md">
                <p>{village.name}</p>
                <Link to={`./${village._id}`}><img src={village.image} alt={village.name}/></Link>
                <p>{village.location.region}</p>
                <p>{village.location.province}</p>
              </div>
            
        )})}
      </div>
    </div>
  )
}

export default Villages;