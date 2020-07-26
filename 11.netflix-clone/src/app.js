import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Playback from "./components/playback/playback";
import Rows from "./components/rows/rows";
import requests from "./requests";
import classes from "./app.module.css";

const App = () => {
  const [banner, setBanner] = useState(null);
  const [netflix, setNetflix] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState(null);
  const [secondPlayer, setSecondPlayer] = useState(null);

  useEffect(() => {
    //fetching trending page
    fetch(`https://api.themoviedb.org/3${requests.fetchTrending}`)
      .then((response) => response.json())
      .then((result) => {
        setBanner(result.results[0]);
        setTrending(result.results);
      })
      .catch((err) => console.log(err));

    //fetching netflix originals
    fetch(`https://api.themoviedb.org/3${requests.fetchNetflixOriginal}`)
      .then((response) => response.json())
      .then((result) => {
        setNetflix(result.results);
      });

    //fetching top rated
    fetch(`https://api.themoviedb.org/3${requests.fetchTopRated}`)
      .then((response) => response.json())
      .then((result) => {
        setTopRated(result.results);
      });
    //fetching action
    fetch(`https://api.themoviedb.org/3${requests.fetchActionMovies}`)
      .then((response) => response.json())
      .then((result) => {
        setAction(result.results);
      });
    //fetching comedy
    fetch(`https://api.themoviedb.org/3${requests.fetchComedyMovies}`)
      .then((response) => response.json())
      .then((result) => {
        setComedy(result.results);
      });
    //fetching Horror
    fetch(`https://api.themoviedb.org/3${requests.fetchActionMovies}`)
      .then((response) => response.json())
      .then((result) => {
        setHorror(result.results);
      });
  }, []);

  const playVideoHandler = (video) => {
    if (firstPlayer) {
      setFirstPlayer(null);
    } else {
      setFirstPlayer(video);
    }
  };
  const playSecondVideoHandler = (video) => {
    if (secondPlayer) {
      setFirstPlayer(null);
    } else {
      setFirstPlayer(video);
    }
  };

  return (
    <>
      <Navbar />;
      <Banner bannerInfo={banner} />
      <div className={classes.wrapper}>
        <Rows
          movies={netflix}
          heading="netflix Originals"
          clicked={playVideoHandler}
        />
        {firstPlayer ? <Playback details={firstPlayer} /> : null}
        <Rows
          movies={trending}
          heading="trending"
          clicked={playSecondVideoHandler}
        />
        {secondPlayer ? <Playback details={secondPlayer} /> : null}
        <Rows movies={topRated} heading="top rated" />
        <Rows movies={action} heading="action" />
        <Rows movies={comedy} heading="comedy" />
        <Rows movies={horror} heading="horror" />
      </div>
    </>
  );
};

export default App;
