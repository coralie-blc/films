import React from 'react';
import { Card } from 'react-bootstrap';


const Film = ({ changeView, film}) => {
  const handleClickFilm = (e) => {
    changeView(film);
  };

  return (
    <Card onClick={(e, film) => handleClickFilm(e, film)}>
      <div className="look">
        <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
      </div>
      <Card.Img className="img-list" variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Film;
