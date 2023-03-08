import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { GetNotesById } from '../services/TaskServices'
import axios from 'axios'

const Notes = () => {
  const [allNotes, setAllNotes] = useState([])
  const { userId } = useParams()
  const { taskId } = useParams()
  // console.log(taskId)


  const getNotes = async (e) => {
    try {
      const res = await GetNotesById(taskId, userId)
      setAllNotes(res)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNotes()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`/`)
    getNotes()
  }

  return (
    <div className='notes'>
      <h1 className='noteTitle'>Notes</h1>
      <div className="notesContainer">
        {allNotes.map((note) => (
          <div className="note">
            <Link to={`/task/${taskId}/user/${note.userId}/addnote`}
            >
              <button className='addNote'>+ Add Note</button>
            </Link>
            <h1>{note.notes}</h1>
            <Link to={`/task/${taskId}/note/${note.id}`} state={{ origNote: note }}>
              <button>Edit Note</button>
            </Link>
            <FaTrashAlt
              onClick={() => handleDelete()}
              role='button'
              tabIndex='0'
              aria-label={`Delete ${note.id}`}
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