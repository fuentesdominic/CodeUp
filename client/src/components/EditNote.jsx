import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const EditNote = () => {
    let navigate = useNavigate()
    const location = useLocation()
    const { editNote } = location.state
    console.log(editNote)

    return (
        <div>EditNote</div>
    )
}
export default EditNote