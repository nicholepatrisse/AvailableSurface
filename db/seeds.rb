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
u1 = User.create!({email: 'demo@gmail.com', first_name: 'Demo', last_name: 'User', password:'password'})

Restaurant.destroy_all
Reservation.destroy_all

restaurant_0001 = Restaurant.create({:name=>"Jalapeño Inferno", :street_address=>"20825 N Pima Rd", :city=>"Scottsdale", :state=>"AZ", :lat=>33.67488, :lng=>-111.888635, :price=>2, :open_at=>11, :close_at=>22, :cuisine=>"Mexican"})
file = File.open('app/assets/images/restaurant_photos/ERLXZKkoxjNA8t5fQTEH9w.jpg')
restaurant_0001.photos.attach(io: file, filename: 'ERLXZKkoxjNA8t5fQTEH9w.jpg')
