import React from 'react';

import ListFilms from 'src/components/ListFilms';
import DetailFilm from 'src/components/DetailFilm';
import films from 'src/data/films';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'listFilm',
      currentFilm: {},
    };

    this.changeView = this.changeView.bind(this);
    this.changeViewAccueil = this.changeViewAccueil.bind(this);
  }
  

  changeView(film) {
    this.setState ({
      currentView: 'detailsFilm',
      currentFilm: film,
    });
  }


  changeViewAccueil() {
    this.setState ({
      currentView: 'listFilm',
    });
   }

  render() {
    const { currentView, currentFilm } = this.state;
    return(
      <div id="app">
        {currentView === 'listFilm' && 
          <ListFilms 
            listFilms={films}
            changeView={this.changeView} 
          />
        }

        {currentView === 'detailsFilm' && 
          <DetailFilm 
            film={currentFilm}
            changeViewAccueil={this.changeViewAccueil}
          />
        }
      </div>
    );
  }
}

export default App;
