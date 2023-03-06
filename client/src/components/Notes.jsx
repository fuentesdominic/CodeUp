import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Notes = () => {
  const [notes, setNotes] = useState('')
  const { taskId } = useParams()




  return (
    <div className='notes'>
      <h1 className='noteTitle'>Notes</h1>

      <div className="notesContainer">

      </div>
    </div>
  )
}
export default Notes