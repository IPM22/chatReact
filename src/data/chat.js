import axios from "axios";

const uri = "http://localhost:3000";
const configuration = {
  headers: { "Access-Control-Allow-Origin": "*" },
};

const GetChats = () => {
  return axios.get(`${uri}/chats`, configuration);
};

const GetConfig = () => {
  return axios.get(`${uri}/config`, configuration);
};

const ChangeConfig = (body) => {
  console.log("🚀 ~ file: chat.js:17 ~ ChangeConfig ~ body:", body);

  return axios.post(`${uri}/config`, body, configuration);
};

export { GetChats, GetConfig, ChangeConfig };
