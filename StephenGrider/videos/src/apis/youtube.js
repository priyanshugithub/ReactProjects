import axios from 'axios';

const KEY = 'AIzaSyBRQgDjxTM5XSCLddRu7R_jSBiM7fwG7HU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5,
        key: KEY
    }
});