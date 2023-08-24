import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "../../API/Api";

const DetailMovies = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchMovies(`movie/${moviesId}`);
        setMovie(response);
      console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [moviesId]);
  console.log(movie);
  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailMovies;
