import React from 'react';
import axios from 'axios';


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

// console.log(imge);

  return (
    <>
      <div className="card-film"
        onClick={handleClickFilm}
        >
        <img src={image}/>
        <p>{title}</p>
      </div>
    </>
  );
}

export default Film;
