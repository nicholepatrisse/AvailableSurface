json.extract! restaurant, :id, :name, :street_address, :city, :state, :price, :open_at, :close_at, :description, :lat, :lng, :cuisine, :reservations
json.photoUrl url_for(restaurant.photo)