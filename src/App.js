import './App.css';
import Row from './Row';
import requests from './Requests';


function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
