// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
// import { useState } from 'react'

// const EditNote = () => {
//     let navigate = useNavigate()
//     const location = useLocation()
//     const { origNote } = location.state
//     console.log(origNote)

//     const { taskId } = useParams()
//     const { userTaskId } = useParams()
//     const [updatedNote, setUpdatedNote] = useState({ notes: `${origNote.notes}` })

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const updateNotePackage = {
//             notes: updateNote.notes
//         }
//         const response = await axios.put(`/tasks/:taskId/:userTaskId/notes`, updateNotePackage)
//         navigate(`/tasks/:taskId/notes`)
//     }

//     const handleChange = (e) => {
//         setUpdatedNote({
//             [e.target.name]: e.target.value
//         })
//     }

//     return (
//         <main>
//             <div className='updateNote'>
//                 <h1 className='updateNoteTitle'> Update Note</h1>
//                 <form onSubmit={handleSubmit} className="updateNoteForm">
//                     <div className="updatenote">
//                         <label htmlFor="noteTitle">Note Content</label>
//                         <textarea
//                             name="notes"
//                             id="noteContent"
//                             required
//                             placeholder={updateNote.notes}
//                             onChange={handleChange}
//                             cols="30" rows="10">
//                         </textarea>
//                         <button className="updateNoteSubmit">Submit</button>
//                     </div>
//                 </form>
//             </div>

//         </main>
//     )
// }
// export default EditNote