import alt from '../alt';

class LocationActions {
  updateLocations(locations) {
    return locations;
  }

  fetchLocations() {
    return null;
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }

  favoriteLocation(location) {
    return location;
  }
}

export default alt.createActions(LocationActions);
