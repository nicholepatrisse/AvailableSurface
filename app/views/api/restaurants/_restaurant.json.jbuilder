json.extract! restaurant, :id, :name, :street_address, :city, :state, :price, :open_at, :close_at, :description, :lat, :lng, :cuisine
json.photoUrls restaurant.photos.map { |file| url_for(file) }