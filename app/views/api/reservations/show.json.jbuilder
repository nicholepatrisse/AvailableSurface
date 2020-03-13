json.reservation do
    json.extract! @reservation, :time, :party_size, :occasion, :requests, :restaurant_id, :created_at, :updated_at
end