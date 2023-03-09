import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { GetNotesById, DeleteNotesById, CreateNewNotes } from "../services/TaskServices";
import axios from "axios";

const Notes = () => {
  const [allNotes, setAllNotes] = useState({});
  const { userId } = useParams();
  const { taskId } = useParams();
  // console.log(taskId);
  // console.log(userId);
  // console.log(allNotes)

  const getNotes = async (e) => {
    try {
      const res = await GetNotesById(taskId, userId);
      setAllNotes(res[0]);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(allNotes)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log('button clicked')
    const res = await CreateNewNotes(taskId, userId)
    // setAllNotes(res[0])
    getNotes()
    console.log(res[0])
  }

  useEffect(() => {
    getNotes();
  }, []);

  // const handleDelete = async (id) => {
  //   await axios.delete(`/`);
  //   getNotes();
  // };

  const handleDelete = async (taskId, userId) => {
    try {
      const res = await DeleteNotesById(taskId, userId);
      getNotes();
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(allNotes)
  return (
    <div className="notes">
      <h1 className="noteTitle">Notes</h1>

      <div className="notesContainer">

        {!allNotes ?
          (<button className="createNote" onClick={handleSubmit}>Create Note</button>) :
          (<div className="allnotes">
            {/* <Link to={`/task/${taskId}/user/${userId}/addnote`}>
              <button className="addNote">+ Add Note</button>
            </Link> */}
            <h1>{allNotes.notes}</h1>

            <Link
              to={`/task/${taskId}/user/${userId}/editnote`}
              state={{ origNote: allNotes }}
            >
              <button>Edit Note</button>
            </Link>
            <FaTrashAlt
              onClick={() => handleDelete(allNotes.taskId, allNotes.userId)}
              role="button"
              tabIndex="0"
              aria-label={`Delete ${allNotes.id}`}
              className="delete"
            />
          </div>)
        }
        {/* </div> */}
        {/* ))} */}
      </div >
    </div >
  );
};
export default Notes;
