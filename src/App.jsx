import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Error, SingleMovieDetails } from "./pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:Id" element={<SingleMovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
