import axios from "axios";

const KEY = "AIzaSyAx8tEo7fwIPxn2EIHYSUFZoYa_bgjHof4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
