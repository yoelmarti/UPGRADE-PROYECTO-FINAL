import React, { useEffect, useState } from 'react'

const Houses = ({houses}) => {
    const [houseList, setHouseList] = useState([])
    console.log(houses)
    useEffect(()=>{
        try {
            fetch('http://localhost:4000/houses')
            .then((res)=>{return res.json()})
            .then((data)=>{
                const casas = data.data.houses
                const houseLists = casas.filter((house) => {return(
                    house._id === "622e3523449db9f8ad8b52c0"
                )
                    })
                    setHouseList(houseLists)
            })
            
        } catch (error) {
            console.error(error)
        }
        
        
        
    },[])

    return (
    <div>
    {houseList.map((house)=>{return(
        <div>
        {/* <p>{house.meters}</p> */}

        </div>
    )
    })}
    </div>
  )
}

export default Houses