import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Houses from './Houses/Houses'
const VillageDetail = () => {
  const { villageId } = useParams();
  const [villageDetail, setVillageDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [houses, setHouses] = useState([])
  
  useEffect(()=>{
    try {
      fetch(`http://localhost:4000/villages/${villageId}`)
      .then((res)=>{return res.json()})
      .then((data)=>{
        setVillageDetail(data.data.village)
        // console.log(data.data.village.houses)
        setHouses(data.data.village.houses)
        setIsLoading(false)
      })
      
      let houseImg = houses.map(house => house.image);

    } catch (error) {
      console.error(error)
    }
  },[villageId])

  if(isLoading){
    return (<>Loading...</>)
  }else{
    
    return (
      <div>
        <p>{villageDetail.name}</p>
        <p>Provincia: {villageDetail.location.province}</p>
        <p>Comunidad: {villageDetail.location.region}</p>
        <p>Habitantes: {villageDetail.population}</p>
        <>Casas: {villageDetail.houses}
        
        {villageDetail.houses.map((element) => {
          return (
          <div>
            <p>{element.image}</p>
          </div>
        )})}</>

        
        <Houses houses={houses}/>
      </div>
    )
    
  }
}

export default VillageDetail