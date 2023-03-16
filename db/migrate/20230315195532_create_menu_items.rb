class CreateMenuItems < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_items do |t|
      t.string :name
      t.string :description
      t.integer :meal_price
      t.string :image_url
      t.integer :preparation_time
      t.boolean :is_visible

      t.timestamps
    end
  end
end
