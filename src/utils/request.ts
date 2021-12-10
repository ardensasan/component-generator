import axios from "axios";
const request = async (config: any) => {
  return await axios(config);
};

export default request;
