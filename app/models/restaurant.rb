class Restaurant < ApplicationRecord
    has_many :reservations
    has_one_attached :photo
end
