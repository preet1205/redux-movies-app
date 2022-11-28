import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Loader } from "../components";
import { getMovieDetails } from "../features/singleMovie/singleMovieSlice";

const SingleMovieDetails = () => {
  const { Id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, isLoading } = useSelector((store) => store.movieDetail);
  useEffect(() => {
    dispatch(getMovieDetails(Id));
  }, [dispatch, Id]);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loader />
        <Loader />
      </LoadingWrapper>
    );
  }

  console.log(movieDetails);

  const {
    Title,
    Year,
    imdbRating,
    imdbVotes,
    Runtime,
    Plot,
    Actors,
    Director,
    Genre,
    Language,
    Awards,
    Poster,
  } = movieDetails;

  return (
    <>
      <Link to="/" className="back-link">
        Back to Movies
      </Link>
      <Wrapper>
        <section className="section-left">
          <h2 className="movie-title">{Title}</h2>
          <article className="movie-rating">
            <span>
              IMDB Rating
              <i className="fa fa-star"></i> : {imdbRating}
            </span>
            <span>
              IMDB Votes <i className="fa fa-thumbs-up"></i> : {imdbVotes}
            </span>
            <span>
              Runtime <i className="fa fa-film"></i> : {Runtime}
            </span>
            <span>
              Year <i className="fa fa-calendar"></i> : {Year}
            </span>
          </article>
          <p className="movie-plot">{Plot}</p>
          <article className="movie-info">
            <div>
              <span>Director : </span>
              <span>{Director}</span>
            </div>
            <div>
              <span>Stars : </span>
              <span>{Actors}</span>
            </div>
            <div>
              <span>Genres : </span>
              <span>{Genre}</span>
            </div>
            <div>
              <span>Languages : </span>
              <span>{Language}</span>
            </div>
            <div>
              <span>Awards : </span>
              <span>{Awards}</span>
            </div>
          </article>
        </section>
        <section className="section-right">
          <img src={Poster} alt={Title} />
        </section>
      </Wrapper>
    </>
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
  width: 88vw;
  max-width: 1170px;
  display: grid;
  grid-template-columns: 60% 30%;
  gap: 10%;
  margin: 0 auto;
  padding: 2.3rem 0;
  justify-content: center;

  .movie-rating {
    padding-left: 0.2rem;
    margin-top: 1.2rem;
    color: var(--font-secondary);
    display: flex;
    align-items: flex-start;
  }

  .movie-rating span {
    margin-right: 1.5rem;
  }
  .movie-title {
    font-size: 2rem;
    font-weight: 400;
    color: var(--font-primary);
  }

  .movie-plot {
    margin-top: 1rem;
    line-height: 1.8rem;
  }
  .movie-info > div span:first-child {
    padding: 0.8rem 0;
    color: var(--font-primary);
    font-weight: 500;
    width: 100px;
    display: inline-block;
  }
  .movie-info > div span {
    color: var(--font-secondary);
  }

  .fa {
    margin-left: 0.2rem;
  }
  .fa-star {
    color: #ff9e00;
  }

  .fa-thumbs-up {
    color: #fafafa;
  }

  .fa-film {
    color: rgb(191, 213, 214);
  }

  .fa-calendar {
    color: peachpuff;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;

    .movie-rating {
      flex-direction: column;
      line-height: 1.6;
    }
  }
`;

export default SingleMovieDetails;
