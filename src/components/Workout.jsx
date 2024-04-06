import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout} = props
  return (
    // id on sectionWrapper to provide a scroll 
    <SectionWrapper id={"workout"} header={"Welcome To"} title=
    {["The","DANGER", "Zone" ]}>
       <div className='flex flex-col gap-4'>
       {workout.map((exercise, i) =>{
        return (
          <ExerciseCard i ={i} exercise={exercise} key={i}/>
        )
       })}
         
      
      </div>  
    </SectionWrapper>
  
  )
}
