class AddLiveStatusToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :live, :boolean
  end
end
