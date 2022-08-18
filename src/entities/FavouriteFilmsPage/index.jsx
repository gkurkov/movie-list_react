import FilmCard from 'common/FilmCard';
import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants';
import { filmsMock } from 'constants/filmsMock';
import React, {useState} from 'react';
import { fromStorage } from 'utils/fromStorage';

const FavouriteFilmsPage = () => {
    const [ , setAllFilmsList] = useState(fromStorage(ALL_FILMS) || filmsMock)
    const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || [])

    if (!favouriteFilmsList.length) return <div>List is empty</div>
    
    return favouriteFilmsList.map((film) => 
    <FilmCard key={film.id} film={film} setAllFilmsList={setAllFilmsList} setFavouriteFilmsList={setFavouriteFilmsList}/>)
}


export default FavouriteFilmsPage
