class UpdateReservationsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :user_id
    add_column :reservations, :user_id, :integer
  end
end
