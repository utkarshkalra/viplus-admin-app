// const baseUrl = "https://viplus-backend.herokuapp.com";
const baseUrl = "http://localhost:2200";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
