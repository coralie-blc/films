import React from 'react';
import { Card } from 'react-bootstrap';


const Film = ({ title, image,changeView, film}) => {
  const handleClickFilm = () => {
    changeView(film);
  };
  
// const imge = axios.get('https://api.themoviedb.org/3/search/keyword?api_key=89f5514cb2e1944c5d90e71387d1b73b&query=harry&page=1')
// .then(response => {
//   console.log(response);
// }).catch(error => {
//   console.log(error);
// })

  return (
    <>
<Card onClick={handleClickFilm}>
  <Card.Img className="img-list" variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    {/* <Button variant="primary">Détails</Button> */}
  </Card.Body>
</Card>
    </>
  );
}

export default Film;
