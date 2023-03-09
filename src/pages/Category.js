import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
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

  const userId = localStorage.getItem('userId');
  console.log(userId);

  useEffect(() => {
    getAllTasks();
  }, []);

  const videoUrl = "https://i.imgur.com/dnaHMWQ.mp4";

  return (
    <div className="category">
      <video className="fullscreen-video" autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
      {allTasks.map((task) => (
        <Link key={task.id} to={`/task/${task.id}/user/${userId}`}>
          <h2>{task.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Task;
