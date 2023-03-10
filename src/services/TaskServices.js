import Client from "./api";

export const GetTasks = async (taskId) => {
  try {
    const res = await Client.get(`/tasks/${taskId}`);
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
    const res = await Client.put(
      `/usrtasks/${taskId}/user/${userId}`,
      newNotePackage
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const EditNotes = async (taskId, userId, updateNotePackage) => {
  try {
    const res = await Client.put(
      `/usrtasks/${taskId}/user/${userId}`,
      updateNotePackage
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetNotesById = async (taskId, userId) => {
  try {
    const res = await Client.get(`/usrtasks/${taskId}/user/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteNotesById = async (taskId, userId) => {
  try {
    const res = await Client.delete(`/usrtasks/${taskId}/user/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetCategory = async (category) => {
  try {
    const res = await Client.get(`/tasks/${category}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateNewNotes = async (taskId, userId) => {
  try {
    const res = await Client.post(`/usrtasks/${taskId}/user/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
