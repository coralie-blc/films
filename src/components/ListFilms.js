import React from 'react';

import Film from 'src/components/Film';

import films from 'src/data/films';
console.log(films)

const ListFilms = ({listFilms, changeView}) => {
  return(
    <>
      <h3>Liste de films</h3>
      <div className="list-films">
        {listFilms.map((film) => (
          <Film
            key={film._id}
            film={film}
            title={film.title}
            image={film.thumbnail}
            changeView={changeView}
          />
        ))}
      </div>
    </>
  );
}

export default ListFilms;
