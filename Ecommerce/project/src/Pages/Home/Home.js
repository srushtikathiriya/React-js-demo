import React from 'react'
import { Link } from "react-router-dom"
import Nav from '../../Component/Nav/Nav'
import Header from '../../Component/Header/Header'
import Fpart from '../../Component/First-Part/Fpart'
import Thirdpart from '../../Component/Thirdsec/Thirdpart'
import Secpart from '../../Component/Second-part/Secpart'
import Lastpart from '../../Component/LastPart/Lastpart'

const Home = () => {
  return (
    <div>
      <Header />
      <Fpart />
      <Secpart />
      <Thirdpart />
      <Lastpart />
    </div>
  )
}

export default Home
