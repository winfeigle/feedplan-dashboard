class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.text :description
      t.string :image_url
      t.string :icon_url
      t.text :address

      t.timestamps
    end
  end
end
