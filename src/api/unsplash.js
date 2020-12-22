import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZeFweWZxakoTAbcU8rgT6uKJ1kutraMwOXzLwAd4rWM",
  },
});
