import React, { useState, useEffect } from "react";
import fetchMovies from "../../API/Api";
import { Link } from "react-router-dom";

const HomeTitle = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchHomeTitle = async () => {
      try {
        const response = await fetchMovies("trending/all/day");
        setResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHomeTitle();
  }, []);

  console.log(results);

  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <Link to={`movies/${result.id}`}>
              {result.name || result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTitle;
