import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
    api_key: '9bfa62f8674a101d6532f8d8237daa28',
};


const fetchMovies = async (path) => {
    try {
        const responce = await axios.get(`${path}`)
        return responce
    } catch (error) {
        console.log(error);
    }
}
export default fetchMovies