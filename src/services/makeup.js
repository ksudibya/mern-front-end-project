import api from "./apiConfig.js";

// function to get all data
export const getMakeups = async () => {
  try {
    const response = await fetch(api);
    return response.json();
  } catch (error) {
    console.error(`Failed to get makeups - error: ${error}`);
    throw error;
  }
};

// function to get data using ID
export const getMakeup = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`);
    return response.json();
  } catch (error) {
    console.error(`Failed to get makeup - error: ${error}`);
    throw error;
  }
};

// function to create data
export const createMakeUp = async (makeupData) => {
  try {
    const response = await fetch(api, {
      method: "POST",
      body: makeupData,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// function to update data
export const updateMakeup = async (id, makeupData) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "PUT",
      body: makeupData,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// function to delete data
export const deleteMakeup = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "delete",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
