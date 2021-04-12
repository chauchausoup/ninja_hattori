import React from 'react'
import {initialVoteState} from '../../redux/persons/persons.actions'

export default function Results() {
  
  return (
    <div>
      {JSON.stringify(initialVoteState)}
    </div>
  )
}
