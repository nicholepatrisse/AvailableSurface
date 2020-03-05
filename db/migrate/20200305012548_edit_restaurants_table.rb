class EditRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :type
    add_column :restaurants, :cuisine, :string
  end
end
