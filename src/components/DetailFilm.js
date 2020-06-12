import React from 'react';

const DetailFilm = ({ film, changeViewAccueil }) => {
  const handleClickAccueil = () => {
    changeViewAccueil();
  };

  return (
      <>
      <p className="accueil-button" onClick={handleClickAccueil}>Retour Accueil</p>
      <h3 className="film-title-details">{film.title} - {film.year}</h3>
      <div className="fiche-film">
        {/* <div>
          <p className="title">{film.title} - {film.year}</p>
        </div> */}

        <div>
        <p>{film.author}</p>
        </div>

        <div>
          <p>{film.synopsis}</p>
        </div>
        
        <div>
          <p>{film.registered}</p>
        </div>

        <div>
          <img src="https://picsum.photos/200/300"/>
        </div>

        <div>
          <p className="id-film">{film._id}</p>
        </div>
      </div>
      </>
  );
}

export default DetailFilm;
