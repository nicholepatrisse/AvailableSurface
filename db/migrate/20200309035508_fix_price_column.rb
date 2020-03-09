class FixPriceColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :price
    add_column :restaurants, :price, :integer
  end
end
