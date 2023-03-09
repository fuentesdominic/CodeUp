import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { GetNotesById, DeleteNotesById, CreateNewNotes } from "../services/TaskServices";

const Notes = () => {
  const [allNotes, setAllNotes] = useState({});
  const { userId } = useParams();
  const { taskId } = useParams();

  const getNotes = async (e) => {
    try {
      const res = await GetNotesById(taskId, userId);
      setAllNotes(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (evt) => {
    evt.preventDefault()
    const res = await CreateNewNotes(taskId, userId)
    getNotes()
  }

  useEffect(() => {
    getNotes();
  }, []);

  const handleDelete = async (taskId, userId) => {
    try {
      const res = await DeleteNotesById(taskId, userId);
      getNotes();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="notes">
      <h1 className="noteTitle">Notes</h1>

      <div className="notesContainer">

        {!allNotes ?
          (
            <button className="createNote" onClick={handleClick}>Create Note</button>
          ) :
          (<div className="allnotes">
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
      </div >
    </div >
  );
};
export default Notes;
