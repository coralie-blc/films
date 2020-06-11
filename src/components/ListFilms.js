import React from 'react';
import { Pagination } from 'react-bootstrap';


import Film from 'src/components/Film';

import films from 'src/data/films';

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
            // image={'<img className="img-list" src="https://picsum.photos/200/300"></img>'}
            changeView={changeView}
          />
        ))}
      </div>
    </>
  );
}

export default ListFilms;
