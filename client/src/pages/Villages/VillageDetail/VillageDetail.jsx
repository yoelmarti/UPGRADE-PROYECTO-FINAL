import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Houses from './Houses/Houses'
const VillageDetail = () => {
  const { villageId } = useParams();
  const [villageDetail, setVillageDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  

  const [houseList, setHouseList] = useState([])
  
  useEffect(()=>{
    try {
      fetch(`http://localhost:4000/villages/${villageId}`)
      .then((res)=>{return res.json()})
      .then((data)=>{
        setVillageDetail(data.data.village);
        setIsLoading(false);
      })
      try {
        fetch(`http://localhost:4000/villages/${villageId}/houses`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            const pueblo = data.data.info[0].houses;
            setHouseList(pueblo);

        })
        
    } catch (error) {
        console.error(error)
    }
    } catch (error) {
      console.error(error)
    }
  },[villageId])

  if(isLoading){
    return (<>Loading...</>)
  }else{
    
    return (
      <div>
        <div>
          <p>{villageDetail.name}</p>
          <img src={`http://localhost:4000/public' ${villageDetail.image}`} alt=''/>
          <p>Provincia: {villageDetail.location.province}</p>
          <p>Comunidad: {villageDetail.location.region}</p>
          <p>Habitantes: {villageDetail.population}</p>
          <p>{villageDetail.description}</p>
          <Link to='https://kuartango.eus/' path='https://kuartango.eus/'>{villageDetail.web}</Link>
          <div>
            <p>Servicios</p>
            <div>
              {villageDetail.features.bar ? <svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-d</title><path d="M432,64H96A16,16,0,0,0,80,80V272a96.11,96.11,0,0,0,96,96H288a96.11,96.11,0,0,0,96-96V192h18a62.07,62.07,0,0,0,62-62V96A32,32,0,0,0,432,64Zm0,66a30,30,0,0,1-30,30H384V96h48Z"/><path d="M400,400H64a16,16,0,0,0,0,32H400a16,16,0,0,0,0-32Z"/></svg> : null}
              {villageDetail.features.farmacy ? <svg width="512px" height="512px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2zM144 168a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8zm236.8 280H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8z"/></svg> : null}
              {villageDetail.features.supermarket ? <p>supermarket</p> : null}
              {villageDetail.features.doctor ? <p>doctor</p> : null}
            </div>
          </div>
        </div>
        
        {houseList.map((house)=>{return(
          <>
            <div key={house.refh}>
              <img className="w-[200px] h-[200px]" src={`http://localhost:4000/public' ${house.image}`} alt={`casa ${house.refh}`}/>
              <p>{house.meters}</p>

            </div>
          </>
          
        )
        })}
      </div>
    )
    
  }
}

export default VillageDetail