import { Link, useParams } from "react-router-dom";

const SingleMovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>SingleMovieDetails</div>;
};

export default SingleMovieDetails;
