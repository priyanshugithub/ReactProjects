import axios from 'axios';

const KEY = 'AIzaSyCTGKHFCWKWZz7cg6-DZcEfzPepfd0N_pA';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});