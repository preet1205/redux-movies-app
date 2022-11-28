import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { MoviesList, Loader } from "../components";
import { API_ENDPOINT } from "../data/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../features/movies/movieSlice";
import { fetchMovies } from "../features/movies/movieSlice";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, isError } = useSelector((store) => store.movies);

  const movieSearch = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(movieSearch));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(searchTerm));
  };

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loader />
        <Loader />
        <Loader />
      </LoadingWrapper>
    );
  }

  if (isError) {
    return (
      <LoadingWrapper>
        <h1>Something went wrong!! Please try again </h1>
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="search-btn" onClick={handleSubmit}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
      <article className="banner-img"></article>
      <MoviesList />
      <button className="btn">Load More</button>
    </Wrapper>
  );
};

const LoadingWrapper = styled.section`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const Wrapper = styled.section`
  .form {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.9rem;
  }
  .form-control {
    height: 3.2rem;
  }
  .search-input,
  .search-btn {
    height: 100%;
    outline: none;
    border: none;
    background: var(--secondary-color-1);
    color: var(--font-secondary-1);
    font-size: 1.5rem;
    padding: 0.4rem 0.9rem;
  }
  .search-input {
    border-radius: 5px 0 0 5px;
    width: 50vw;
  }
  .search-btn {
    border-radius: 0 5px 5px 0;
    width: 3.5rem;
  }
  .search-btn:hover {
    background: var(--font-secondary-1);
    color: var(--secondary-color-1);
    border-radius: 0;
  }
`;

export default Home;
