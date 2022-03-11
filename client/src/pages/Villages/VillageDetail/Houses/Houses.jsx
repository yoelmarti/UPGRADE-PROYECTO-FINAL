import React, { useEffect } from 'react'

const Houses = ({houses}) => {
  
    useEffect(()=>{
        // try {
        //     fetch('http://localhost:4000/houses')
        //     .then((res)=>{return res.json()})
        //     .then((data)=>{
        //         const casas = data.data.houses
        //         const houseList = casas.filter((house) => {return(
        //             house._id === "6224855f48bd96216ef47341"
        //         )
        //             })
        //         console.log(houseList)
        //         console.log(data.data.houses)
        //     })
            
        // } catch (error) {
        //     console.error(error)
        // }
        
        
        
    },[])

    return (
    <div>
    {/* {houses.map((house)=>{return(
        <div>
        <p>{house}</p>

        </div>
    )
    })} */}
    </div>
  )
}

export default Houses