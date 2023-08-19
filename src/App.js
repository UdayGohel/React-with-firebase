import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loader from "./components/Loader";
import AddMovie from "./components/AddMovie";
// import Counter from "./redux-test/components/Counter";
// import { Provider } from "react-redux";
// import store from "./redux-test/store/store";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setISLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setISLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://react-foodorder-5da2d-default-rtdb.firebaseio.com/movies.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong !");
      }
      const data = await res.json();
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releasseDate: data[key].releasseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message);
    }
    setISLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const res = await fetch(
      "https://react-foodorder-5da2d-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    console.log(data);
  }

  var content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <Loader />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

// export default App;

// const App = () => (
//   <Provider store={store}>
//     <Counter/>
//   </Provider>
// );

export default App;
