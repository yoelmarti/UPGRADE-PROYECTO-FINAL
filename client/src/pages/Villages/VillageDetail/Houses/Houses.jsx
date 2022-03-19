// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const Houses = ({houseList}) => {
    
    return (
    <div>
    {houseList.map((house, index)=>{return(
        <div>
        <p>{house.meters}</p>
        

        </div>
    )
    })}
    </div>
  )
}

export default Houses