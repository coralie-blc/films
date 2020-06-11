import React from 'react';
import Pagination from 'src/components/Pagination';
import Film from 'src/components/Film';

import films from 'src/data/films';


class ListFilms extends React.Component {
  constructor(props) {
    super(props)

    var exampleItems = films.map((film) => (
      { name: (film.title), id: (film._id), value: (film)}
    ));

    this.state = {
      films: films,
      exampleItems: exampleItems,
      pageOfItems: []
    };

    this.changeViewFilm = this.changeViewFilm.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

   changeViewFilm = (film) => {
     console.log('film in ListFilm', film);
    this.props.changeView(film);
  };

  onChangePage(pageOfItems) {
      this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return(
      <>
      <h3 className="title_list_film">Liste de films</h3>
      <div className="list-films">
        {this.state.pageOfItems.map(film =>
          <div key={film.id}>
            <Film
              key={film._id}
              film={film.value}
              changeView={this.changeViewFilm}
            />
          </div>
        )}
      </div>

      <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
    </>
    )
  }
}
export default ListFilms;
