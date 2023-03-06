import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const AddNote = () => {
    let navigate = useNavigate()
    const { taskId } = useParams()
    const [newNote, setNewNote] = useState({ notes: '' })



    return (
        <main>
            <div className="newNote">
                <h1 className="newNoteTitle">Add Notes</h1>
                <form onSubmit={handleSubmit} className="newNoteForm">
                    <textarea
                        name="notes"
                        id="newnotes"
                        value={newNote.notes}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Notes'
                        cols="30" rows="10"></textarea>
                    <button type='submit' className='newNoteSubmit'>Submit</button>
                </form>
            </div>

        </main>
    )
}
export default AddNote