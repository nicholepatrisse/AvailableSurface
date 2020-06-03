class Restaurant < ApplicationRecord
    has_many :reservations
    has_many :ratings
    has_many_attached :photos
end
