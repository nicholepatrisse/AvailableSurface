class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :overall, null:false
      t.integer :food, null:false
      t.integer :ambiance, null:false
      t.text :review
      t.integer :restaurant_id, null:false
      t.integer :user_id, null:false
      t.timestamps
    end
  end
end
