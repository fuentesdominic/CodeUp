import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'

const Notes = () => {
  const [allNotes, setAllNotes] = useState([])
  const { userTaskId } = useParams()
  const { taskId } = useParams()

  const getNotes = async (e) => {
    try {
      let res = await axios.get(`/usrtasks/${taskId}`)
      setAllNotes(res.data)
      // console.log(allNotes)
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
      <Link to={`/task/${taskId}/addnote`}>
        <button className='addNote'>+ Add Note</button>
      </Link>
      <div className="notesContainer">
        {allNotes.map((note) => (
          <div className="note">
            <h1>{note.notes}</h1>
            <Link to={`/task/${taskId}/note/${note._id}`} state={{ origNote: note }}>
              <button>Edit Note</button>
            </Link>
            <FaTrashAlt
              onClick={() => handleDelete()}
              role='button'
              tabIndex='0'
              aria-label={`Delete ${note._id}`}
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