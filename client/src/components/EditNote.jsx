import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const EditNote = () => {
    let navigate = useNavigate()
    const location = useLocation()
    const { origNote } = location.state
    console.log(origNote)

    const { taskId } = useParams()
    const { userTaskId } = useParams()
    const [updatedNote, setUpdatedNote] = useState({ note: `${origNote.notes}` })
    return (
        <div>EditNote</div>
    )
}
export default EditNote