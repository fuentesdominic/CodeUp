import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { UpdateNotes } from '../services/TaskServices'
const AddNote = () => {
    let navigate = useNavigate()
    const { taskId } = useParams()
    const { userId } = useParams()
    const [newNote, setNewNote] = useState({ notes: '' })
    // GET USERID
    console.log(userId)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newNotePackage = {
            notes: newNote.notes
        }
        const res = await UpdateNotes(userId, taskId, newNotePackage)
        setNewNote(res)
        // console.log(response)
        navigate(`/task/${taskId}/user/${userId}`)
    }

    const handleChange = (e) => {
        setNewNote({
            [e.target.id]: e.target.value
        })
    }

    return (
        <main>
            <div className="newNote">
                <h1 className="newNoteTitle">Add Notes</h1>
                <form onSubmit={handleSubmit} className="newNoteForm">
                    <textarea
                        name="notes"
                        id="notes"
                        value={newNote.notes}
                        onChange={handleChange}
                        required
                        placeholder={newNote.notes}
                        cols="30" rows="10"></textarea>
                    <button type='submit' className='newNoteSubmit'>Submit</button>
                </form>
            </div>

        </main>
    )
}
export default AddNote