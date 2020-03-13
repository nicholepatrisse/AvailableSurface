class Reservation < ApplicationRecord
    validates :time, :party_size, :restaurant_id, presence:true
    belongs_to :restaurant
end
