import React from 'react'
import Data from "../Data/Data"
import Card from "../Card/Card"

function Home() {
  return (
    <div>
    <div className='text-3xl font-bold text-red-600'>
        <h1>Home Page</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", padding: "30px" }}>
        {Data?.map((cvalue, ind, arr) => {
          return <Card key={ind} id={cvalue.id} name={cvalue.name}  age={cvalue.age} img={cvalue.img} Img={cvalue.Img}/>
        })}
      </div>
    </div>
    </div>
  )
}

export default Home
