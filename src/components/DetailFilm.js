import React from 'react';

const DetailFilm = ({ film, changeViewAccueil }) => {

  const handleClickAccueil = () => {
    changeViewAccueil();
  };

  return (
    <div>
      <p className="accueil-button" onClick={handleClickAccueil}>Retour Accueil</p>
      <h3>Détail du film</h3>
      <div className="fiche-film">
        <div>
          <p className="title">{film.title} - {film.year}</p>
        </div>

        <div>
        <p>{film.author}</p>
        </div>

        <div>
          <p>{film.synopsis}</p>
        </div>
        
        <div>
          <p>{film.registered}</p>
        </div>
        
        <ul>
          {film.tags.map((tag) => (
            <li key={tag}>{tag}</li>
              ))}
        </ul>
        
        <div>
          <p>{film.isActive}</p>
        </div>
        
        <div>
          <img src="https://picsum.photos/200/300"/>
        </div>

        <div>
          <p className="id-film">{film._id}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
