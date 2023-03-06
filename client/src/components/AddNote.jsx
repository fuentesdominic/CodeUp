import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const AddNote = () => {
    let navigate = useNavigate()
    const { taskId } = useParams()
    const [newNote, setNewNote] = useState({ notes: '' })
    return (
        <div>AddNote</div>
    )
}
export default AddNote