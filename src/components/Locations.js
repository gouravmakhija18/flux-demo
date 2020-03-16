import React, { Component } from 'react';
import AltContainer from 'alt-container';
import LocationStore from '../stores/LocationStore';
import FavoritesStore from '../stores/FavoritesStore';
import LocationActions from '../actions/LocationActions';

class Favorites extends Component {
  constructor(props){
    super(props);
    this.removeFave = this.removeFave.bind(this);
  }

  removeFave(ev) {
    const cid = Number(ev.target.getAttribute('data-id'));
    LocationActions.notFavoriteLocation(cid);
  }

  render() {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          const faveButton = (
            <button onClick={this.removeFave} data-id={location.id}>
              Remove Favorite
            </button>
          );
          return (
            <li key={i}>{location.name}  {faveButton}</li>
          );
        })}
      </ul>
    );
  }
};

class AllLocations extends Component {
  constructor(props){
    super(props);
    this.addFave = this.addFave.bind(this);
    this.addCity = this.addCity.bind(this);
  }

  addFave(ev) {
    const location = LocationStore.getLocation(
      Number(ev.target.getAttribute('data-id'))
    );
    LocationActions.favoriteLocation(location);
  }

  addCity(){
    const nextId = this.props.locations.length;
    const city = document.getElementById('city').value;
    const location = {id: nextId, name: city, has_favorite: false};
    LocationActions.addLocations(location);
    document.getElementById('city').value ="";
  }

  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if (LocationStore.isLoading()) {
      return (
        <div>
          <img src="./images/ajax-loader.gif" alt="loading" />
        </div>
      )
    }

    return (
      <div>
          <input id="city"ref="city" type="text" />
          <button onClick={this.addCity}>Add</button>
          <ul>
            {this.props.locations.map((location, i) => {
              const faveButton = (
                <button onClick={this.addFave} data-id={location.id}>
                  Favorite
                </button>
              );

              return (
                <li key={i}>
                  {location.name} {location.has_favorite ? '<3' : faveButton}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
};

class Locations extends Component {
  componentDidMount() {
    LocationStore.fetchLocations();
  }

  render() {
    return (
      <div>
        <h1>Locations</h1>
        <AltContainer store={LocationStore}>
          <AllLocations />
        </AltContainer>

        <h1>Favorites</h1>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
    );
  }
};

export default Locations;
