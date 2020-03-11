json.user do
    json.extract! user, :id, :email, :first_name, :last_name, :phone_number, :display_name
    json.image_url url_for(user.photo)
end

json.reservations do
    user.reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :time, :party_size, :occasion, :requests, :restaurant_id, :created_at, :updated_at
        end
    end
end

json.restaurants do
    user.restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :street_address, :city, :state, :price, :open_at, :close_at, :description, :lat, :lng, :cuisine
            json.photoUrl url_for(restaurant.photo)
        end
    end
end