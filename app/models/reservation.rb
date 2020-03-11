class Reservation < ApplicationRecord
    validates :time, :user_id, :party_size, :restaurant_id, presence:true
    belongs_to :restaurant
    belongs_to :user
end
