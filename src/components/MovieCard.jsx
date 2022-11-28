import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCard = (movie) => {
  const { imdbID: id, Year: year, Title: title, Poster: image } = movie;

  return (
    <Wrapper>
      <div className="movie-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>Year: {year}</p>
        <Link to={`/movies/${id}`}>Details</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--secondary-color);
  height: fit-content;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
  .movie-image {
    height: 300px;
  }

  .movie-image img {
    width: 100%;
    height: 100%;
  }
  .card-info {
    color: var(--font-primary);
    padding: 1.3rem;
    text-align: center;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.6rem;
  }
  p {
    margin-bottom: 0.7rem;
  }
  a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    padding: 0.5rem 0.8rem;
    color: var(--font-secondary);
    border-radius: 10px;
    background: var(--primary-color);
    border: 1px solid var(--font-secondary);
  }
  a:hover {
    font-size: 110%;
    background: var(--font-secondary-1);
    color: var(--secondary-color-1);
  }
`;

export default MovieCard;
