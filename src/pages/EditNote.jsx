import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { EditNotes } from '../services/TaskServices'
// 
const EditNote = () => {
    let navigate = useNavigate()
    const location = useLocation()
    const { origNote } = location.state

    const { taskId } = useParams()
    const { userId } = useParams()
    const [updatedNote, setUpdatedNote] = useState({ notes: `${origNote.notes}` })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateNotePackage = {
            notes: updatedNote.notes
        }
        await EditNotes(taskId, userId, updateNotePackage)
        navigate(`/task/${taskId}/user/${userId}`)
    }

    const handleChange = (e) => {
        setUpdatedNote({
            [e.target.name]: e.target.value
        })
    }
    const videoUrl = "https://i.imgur.com/dnaHMWQ.mp4";

    return (
        <main>
            <div className='updateNote'>
                <video className="background-video" autoPlay loop muted>
                    <source src={videoUrl} type="video/mp4" />
                </video>
                <h1 className='updateNoteTitle'> Edit Your Note</h1>
                <form onSubmit={handleSubmit} className="updateNoteForm">
                    <div className="updatenote">
                        <textarea
                            name="notes"
                            id="noteContent"
                            required
                            value={updatedNote.notes}
                            onChange={handleChange}
                            cols="30" rows="10">
                        </textarea>
                        <button className="updateNoteSubmit">Submit</button>
                    </div>
                </form>
            </div>

        </main>
    )
}
export default EditNote