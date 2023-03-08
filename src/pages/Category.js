import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GetCategory } from '../services/TaskServices'

const Task = () => {
  const { category } = useParams();
  const [allTasks, setAllTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const res = await GetCategory(category);
      setAllTasks(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const userId = localStorage.getItem('userId')
  console.log(userId)


  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="category">
      {allTasks.map((task) => (
        <Link to={`/task/${task.id}/user/${userId}`}>
          <h2>{task.title}</h2>
        </Link>
      ))}
    </div>
  );
};
export default Task;
