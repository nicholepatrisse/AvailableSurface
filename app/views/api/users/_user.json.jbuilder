json.extract! user, :id, :email, :first_name, :last_name, :phone_number, :display_name
json.photo_url url_for(user.photo)