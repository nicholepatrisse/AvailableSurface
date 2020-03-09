class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime :time, null:false
      t.integer :user_id, null:false
      t.integer :party_size, null:false
      t.string :occasion
      t.string :requests
      t.integer :restaurant_id, null:false
      t.timestamps
    end
  end
end
