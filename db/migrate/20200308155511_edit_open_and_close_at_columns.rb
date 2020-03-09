class EditOpenAndCloseAtColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :open_at
    remove_column :restaurants, :closes_at
    add_column :restaurants, :open_at, :integer
    add_column :restaurants, :close_at, :integer
  end
end
