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
    <div className='bg-[#ECEBE4]'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center h-[200px] pt-10'>
          <select onChange={handleChange} className='w-[400px] border-2 rounded-md border-black text-xl uppercase drop-shadow-2xl'>
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
        <div className='flex flex-wrap -m-4'>
          {villagesList.map((village)=>{return(
            <div key={village._id} className="p-4 sm:w-1/2 lg:w-1/3">
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden drop-shadow-2xl bg-white hover:bg-[#744253] transition duration-300 ease-in'>
                <img src={`http://localhost:4000/public' ${village.image}`} alt={village.name} className='lg:h-72 md:h-48 w-full object-cover object-center'/>
                <div className='p-6 hover:text-[#ECEBE4] '>
                  <h2 className='text-base font-medium text-[#CC998D] mb-1'>{village.name}</h2>
                  <p className='text-2xl font-semibold mb-3'>{village.location.region}</p>
                  <p className='leading-relaxed mb-3'>{village.location.province}</p>
                  <div className='flex items-center flex-wrap text-[#CC998D]'>
                    <Link to={`./${village._id}`}>
                      <p className='inline-flex items-center md:mb-2 lg:mb-0 hover:animate-bounce hover:delay-300'>Ver pueblo</p> 
                    </Link>
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  )
}

export default Villages;