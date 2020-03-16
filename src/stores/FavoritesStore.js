import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class FavoritesStore {
  constructor() {
    this.locations = [];

    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
      removeFavoriteLocation: LocationActions.NOT_FAVORITE_LOCATION,
      addfavCity: LocationActions.ADD_LOCATIONS
    });
  }

  addFavoriteLocation(location) {
    this.locations.push(location);
  }

  removeFavoriteLocation(id) {
   	const updatedList = this.locations.filter(function(item) {
   		return item.id !== id;
   	});
   	this.locations = updatedList;
  }

  addfavCity(location){
    if(location.has_favorite){
      this.locations.push(location);
    }
  }
}

export default alt.createStore(FavoritesStore, 'FavoritesStore');
