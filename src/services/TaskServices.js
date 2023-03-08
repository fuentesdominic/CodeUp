import Client from "./api";

export const GetPosts = async () => {
  try {
    const res = await Client.get("/tasks");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetNotes = async () => {
  try {
    const res = await Client.get("/usrtasks");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateNotes = async (taskId, userId, newNotePackage) => {
  try {
    const res = await Client.put(`/usrtasks/${taskId}/user/${userId}`, newNotePackage);
    return res.data;
  } catch (error) {
    throw error;
  }
};


