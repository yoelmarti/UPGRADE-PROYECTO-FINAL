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
            {villageDetail.features.bar ? <p>bar</p> : null}
            {villageDetail.features.farmacy ? <p>farmacy</p> : null}
            {villageDetail.features.supermarket ? <p>supermarket</p> : null}
            {villageDetail.features.doctor ? <p>doctor</p> : null}
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