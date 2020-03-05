json.extract! user, :id, :email, :first_name, :last_name, :phone_number, :display_name
json.image_url url_for(user.photo)