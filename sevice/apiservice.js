import Axios from "axios";

let API_KEY = import.meta.env.VITE_API_KEY;
let BASE_URL = import.meta.env.VITE_BASE_URL;

//trending movies

export const getTrendingMovies = async()=>{
    try {
        const res = await Axios.get(
            `${BASE_URL}/trending/movies/day?api_key=${API_KEY}&language=en-US`,
        );
        console.log(res.data.results);
        
    } catch (error) {
        console.log(error, "error in fetching movies");
        
    }
} ;

export const getPopularMovies= async(page = 1)=>{
    try {
        const res = await Axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,);

        console.log(res);
        
        
    } catch (error) {
        console.log(error, "error in fetching movies");
        
    }
};