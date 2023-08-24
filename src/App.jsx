import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import DetailMovies from "./Pages/DetailMovies/DetailMovies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies">
          <Route path="movies/:moviesId" element={<DetailMovies />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
