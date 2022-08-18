import React, { useEffect, useState } from 'react'
import { filmsMock } from 'constants/filmsMock'
import FilmCard from 'common/FilmCard'
import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants'
import { fromStorage } from 'utils/fromStorage'
import { toStorage } from 'utils/toStorage'

const AllFilmsPage = () => {
  const [allFilmsList, setAllFilmsList] = useState(fromStorage(ALL_FILMS) || filmsMock)
  const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || [])

  useEffect(() => {
    if (!fromStorage(ALL_FILMS) && !fromStorage(FAVOURITE_FILMS)) {
      toStorage(ALL_FILMS, allFilmsList)
      toStorage(FAVOURITE_FILMS, favouriteFilmsList)
    }
  }, [allFilmsList, favouriteFilmsList])

  return allFilmsList.map((film) => (
    <FilmCard
      key={film.id}
      film={film}
      setAllFilmsList={setAllFilmsList}
      setFavouriteFilmsList={setFavouriteFilmsList}
    />
  ))
}

export default AllFilmsPage
