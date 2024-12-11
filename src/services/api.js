// src/api/apiService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com';

// Authentication
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data.token) {
      // Store user token for authentication persistence
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// User Profile
export const getUserProfile = async () => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    const response = await axios.put(`${API_URL}/user/profile`, profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Workshops
export const getWorkshops = async () => {
  try {
    const response = await axios.get(`${API_URL}/workshops`);
    return response.data;
  } catch (error) {
    console.error("Error fetching workshops:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getWorkshopDetails = async (workshopId) => {
  try {
    const response = await axios.get(`${API_URL}/workshops/${workshopId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching workshop details:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const registerForWorkshop = async (workshopId) => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    const response = await axios.post(`${API_URL}/workshops/${workshopId}/register`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error registering for workshop:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Feedback
export const submitFeedback = async (workshopId, feedbackData) => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    const response = await axios.post(`${API_URL}/workshops/${workshopId}/feedback`, feedbackData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting feedback:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Favorite Workshops
export const getFavoriteWorkshops = async () => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    const response = await axios.get(`${API_URL}/user/favorites`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching favorite workshops:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const toggleFavoriteWorkshop = async (workshopId) => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    const response = await axios.post(`${API_URL}/workshops/${workshopId}/favorite`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error toggling favorite workshop:", error.response ? error.response.data : error.message);
    throw error;
  }
};
