import {useState, useCallback} from 'react';
import Main from "../src/components/Main/Main";
import Footer from "../src/components/Footer/Footer";

const Home = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const onMovieClickHandler = useCallback((movie) => {
        setSelectedMovie(movie);
    }, [])

    const onCloseMovie = () => {
        setSelectedMovie(null);
    }

    return (
      <>
        <Main onMovieClickHandler={onMovieClickHandler} movies={movies} />
        <Footer />
        <div id='modal'></div>
      </>
    );
};

export default Home;

Home.getInitialProps = async ({ req }) => {
    if (!req) {
        return { movies: null}
    }

    const response = await fetch('http://localhost:4000/movies');
    const data = await response.json();

    return {
        movies: data.data
    }
}