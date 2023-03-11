class AddAdminToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_reference :restaurants, :admin, null: false, foreign_key: true
  end
end
