import axios from "axios";

const API_URL = "http://localhost:5000/api/members";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getMembers = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return response.data;
};

export const createMember = async (memberData) => {
  const response = await axios.post(
    API_URL,
    memberData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  return response.data;
};