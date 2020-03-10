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