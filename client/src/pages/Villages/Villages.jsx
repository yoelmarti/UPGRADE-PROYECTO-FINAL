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
    <div className='block bg-[#ECEBE4] h-full'>
      <div className='container px-5 py-24 mx-auto'>
        <p className="w-3/5 m-auto pl-[50px] pb-4 text-7xl text-[#481620] text-center">Nuestros Pueblos</p>
        <div className='text-center h-[200px] pt-10 relative'>
          <select onChange={handleChange} className='text-white block w-full p-4 text-lg rounded-md bg-[#744253]'>
            <option value="">Todas las provincias</option>
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
        </div>
        <div className='flex flex-wrap -m-4'>
          {villagesList.map((village)=>{return(
            <div key={village._id} className="p-4 sm:w-1/2 lg:w-1/3">
              <div className='h-full border-2 border-white hover:border-[#744253] border-opacity-60 rounded-lg overflow-hidden drop-shadow-2xl bg-white hover:bg-[#744253] hover:text-[#ECEBE4] transition duration-300 ease-in'>
                <img src={`http://localhost:4000/public' ${village.image}`} alt={village.name} className='lg:h-72 md:h-48 w-full object-cover object-center rounded-b-lg'/>
                <div className='p-6'>
                  <h2 className='text-base font-medium text-[#CC998D] mb-1'>{village.name}</h2>
                  <p className='text-2xl font-semibold mb-3'>{village.location.region}</p>
                  <p className='leading-relaxed mb-3'>{village.location.province}</p>
                  <div className='flex items-center flex-wrap text-[#CC998D]'>
                    <Link to={`./${village._id}`}>
                      <p className='inline-flex items-center md:mb-2 lg:mb-0 hover:animate-bounce hover:delay-300'>Ver pueblo</p> 
                    </Link>
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