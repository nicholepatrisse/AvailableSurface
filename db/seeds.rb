# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
# require 'JSON'

User.destroy_all

u1 = User.create!({email: 'danny@gmail.com', first_name: 'danny', last_name: 'phan', password:'password'})
u2 = User.create!({email: 'eric@gmail.com', first_name: 'eric', last_name: 'ho', password:'password'})
u3 = User.create!({email: 'nic@gmail.com', first_name: 'nic', last_name: 'kruger', password:'password'})
u4 = User.create!({email: 'alec@gmail.com', first_name: 'alec', last_name: 'keeler', password:'password'})
u5 = User.create!({email: 'james@gmail.com', first_name: 'james', last_name: 'berke', password:'password'})
u6 = User.create!({email: 'demo@gmail.com', first_name: 'Demo', last_name: 'User', password:'password'})

Restaurant.destroy_all

cities = ["New york", 'san francisco', 'chicago', 'los angeles', 'miami', 'las vegas']
ipsum = "https://baconipsum.com/api/?type=meat-and-filler&sentences=5"
cuisines = ['French', 'Greek', 'Steakhouse', 'Seafood', 'American', 'Italian', 'Tapas', 'Japanese', 'Mexican', 'Sushi']

cities.each do |city|
    url = "http://opentable.herokuapp.com/api/restaurants?per_page=5&city=#{city}"
    json = URI.parse(url).read
    parsed = JSON.parse(json)
    
    parsed['restaurants'].each do |restaurant|
        new_restaurant = {
            'name' => restaurant['name'],
            'street_address' => restaurant['address'],
            'city' => restaurant['city'],
            'state' => restaurant['state'],
            'price' => restaurant['price'],
            'lat' => restaurant['lat'],
            'lng' => restaurant['lng'],
        }

        # This in not the greatest randomization in the world, 
        # this is just a tribute (To Danny Phan's permutation solution)
        new_restaurant['open_at'] = rand(5..16)
        new_restaurant['close_at'] = (rand(12..28)) % 24;
        new_restaurant['description'] = JSON.parse(URI.parse(ipsum).read).join
        new_restaurant['cuisine'] = cuisines[rand(0...cuisines.length)]
        res = Restaurant.create!(new_restaurant)

        photo_num = rand(1..30)
        photo_name = "#{photo_num}.jpg"
        photo_file = File.open("app/assets/images/restaurant_photos/#{photo_name}")
        res.photo.attach(io: photo_file, filename: photo_name)
    end
end