import React, {useState, useCallback} from 'react';
import Footer from './components/Footer/Footer';
import Main from "./components/Main/Main";

function App(props) {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const onMovieClickHandler = useCallback((movie) => {
        setSelectedMovie(movie);
    }, [])

    const onCloseMovie = () => {
        setSelectedMovie(null);
    }

    return (
        <>
            {/*<Routes>*/}
            {/*    <Route path='/' element={<Navigate replace to='/search' />} />*/}
            {/*    <Route path='/search' element={*/}
            {/*        <>*/}
            {/*            <Outlet />*/}
            {/*            <Main*/}
            {/*                onMovieClickHandler={onMovieClickHandler} />*/}
            {/*        </>*/}
            {/*    }>*/}
            {/*        <Route index element={*/}
            {/*            <HeaderContainer*/}
            {/*                selectedMovie={selectedMovie}*/}
            {/*                onCloseMovie={onCloseMovie} />*/}
            {/*        } />*/}
            {/*        <Route path='movie' element={*/}
            {/*            <>*/}
            {/*            {selectedMovie && (<MovieDetails*/}
            {/*                movie={selectedMovie}*/}
            {/*                onClickHahdler={onCloseMovie}/>)}*/}
            {/*            </>*/}
            {/*        } />*/}
            {/*    </Route>*/}
            {/*    <Route path="*" element={<p>Not Found 404</p>} />*/}
            {/*</Routes>*/}
            <Main onMovieClickHandler={onMovieClickHandler} />
            <Footer />
            <div id='modal'></div>
        </>
    );
}

export default App;
