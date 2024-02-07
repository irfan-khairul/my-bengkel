import React, { useContext } from 'react'
import { WorkshopContext } from '../Context/WorkshopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'
import WorkshopDisplay from '../Components/WorkshopDisplay/WorkshopDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'

const Workshop = () => {
  const {all_workshop} = useContext(WorkshopContext)
  const {workshopId} = useParams();
  const workshop = all_workshop.find((e)=> e.id === Number(workshopId))
  return (
    <div>
      {/* <Breadcrumbs workshop={workshop}/> */}
      <WorkshopDisplay workshop={workshop}/>
      <DescriptionBox/>
    </div>
  )
}

export default Workshop