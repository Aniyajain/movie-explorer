import React, { useState } from "react";
import { getPopularMovies } from "../sevice/apiservice";
import 
// getPopularMovies();
function Movies(){
    const [loading  setLoading] = useState(true);
    const[page , set]
    <div>

    </div>
}

const filteredMovies = movies.filter((movie)=>{
    const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchRating = movie.vote_average >= minRating;

    return matchSearch && matchRating;
})


if(loading){
    return(
        <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl">
        Loading Movies......</h2>
        </div>
    )
}