class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :price
      t.datetime :open_at
      t.datetime :closes_at
      t.text :description
      t.float :lat
      t.float :lng
      t.string :type
      t.timestamps
    end
  end
end
