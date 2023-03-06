// import { useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
// import { useState } from 'react'

// const AddNote = () => {
//     let navigate = useNavigate()
//     const { taskId } = useParams()
//     const [newNote, setNewNote] = useState({ notes: '' })

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const newNotePackage = {
//             notes: newNote.notes
//         }
//         const response = await axios.post('/userId/:taskId', newNotePackage)
//         navigate(`/tasks/:taskId/notes`)
//     }

//     const handleChange = (e) => {
//         setNewNote({
//             [e.target.name]: e.target.value
//         })
//     }

//     return (
//         <main>
//             <div className="newNote">
//                 <h1 className="newNoteTitle">Add Notes</h1>
//                 <form onSubmit={handleSubmit} className="newNoteForm">
//                     <textarea
//                         name="notes"
//                         id="newnotes"
//                         value={newNote.notes}
//                         onChange={handleChange}
//                         required
//                         placeholder='Enter Your Notes'
//                         cols="30" rows="10"></textarea>
//                     <button type='submit' className='newNoteSubmit'>Submit</button>
//                 </form>
//             </div>

//         </main>
//     )
// }
// export default AddNote