class Restaurant < ApplicationRecord
    has_many :reservations
    has_many_attached :photos
end
