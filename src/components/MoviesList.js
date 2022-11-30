import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MovieCard from "./MovieCard.jsx";

const MoviesList = () => {
  const { moviesList } = useSelector((store) => store.movies);
  return (
    <Wrapper>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {moviesList.map((movie, index) => {
            return <MovieCard key={index} {...movie} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 1.7rem;
  .movie-list {
    margin: 1.5rem 0;
  }
  h2 {
    color: var(--font-secondary);
    margin-bottom: 1.2rem;
    font-weight: 500;
    font-size: 1.7rem;
  }

  .movie-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem 1.9rem;
  }
`;

export default MoviesList;
