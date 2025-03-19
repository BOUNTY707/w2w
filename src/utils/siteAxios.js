import axios from "axios";
 
const siteAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`, //YOUR_API_URL HERE
  headers: {
    "Content-Type": "application/json",
    "X-Site-Id": process.env.REACT_APP_SITE_ID,
  },
});

export default siteAxios;
