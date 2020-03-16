import alt from '../alt';

class LocationActions {
  updateLocations(locations) {
    return locations;
  }

  fetchLocations() {
    return null;
  }

  addLocations(location) {
    return location;
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }

  favoriteLocation(location) {
    return location;
  }

  notFavoriteLocation(id) {
    return id;
  }
  addTodo(todo){
    return todo;
  }
  addToFavoriteTodo(index){
    return index;
  }
}

export default alt.createActions(LocationActions);
