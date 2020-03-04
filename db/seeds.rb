# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create({email: 'danny@gmail.com', first_name: 'danny', last_name: 'phan', password:'password'})
u2 = User.create({email: 'eric@gmail.com', first_name: 'eric', last_name: 'ho', password:'password'})
u3 = User.create({email: 'nic@gmail.com', first_name: 'nic', last_name: 'kruger', password:'password'})
u4 = User.create({email: 'alec@gmail.com', first_name: 'alec', last_name: 'keeler', password:'password'})
u5 = User.create({email: 'james@gmail.com', first_name: 'james', last_name: 'berke', password:'password'})
u6 = User.create({email: 'demo@gmail.com', first_name: 'Demo', last_name: 'User', password:'password'})