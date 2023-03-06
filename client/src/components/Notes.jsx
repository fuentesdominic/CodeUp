import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Notes = () => {
  const [notes, setNotes] = useState('')
  const { taskId } = useParams()

  const getNotes = async (e) => {
    try {
      let res = await axios.get(`/api/${taskId}/notes`)
      setNotes(res)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNotes()
  }, [])



  return (
    <div className='notes'>
      <h1 className='noteTitle'>Notes</h1>
      <Link to={`/task/${taskId}/addnote`}>
        <button className='addNote'>+ Add Note</button>
      </Link>
      <div className="notesContainer">
        {userTask.map((note) => (
          <div className="note">
            <h1>{note.notes}</h1>
            <Link to={`/task/${taskId}/note/${userTaskId}`} state={{ origNote: note }}>
              <button>Edit Note</button>
            </Link>
            <FaTrashAlt
              onClick={() => handleDelete()}
              role='button'
              tabIndex='0'
              aria-label={`Delete ${userTaskId}`}
              className='delete'
            />
          </div>
        )
        )}
      </div>
    </div>
  )
}
export default Notes