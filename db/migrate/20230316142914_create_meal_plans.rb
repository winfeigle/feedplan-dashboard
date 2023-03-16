class CreateMealPlans < ActiveRecord::Migration[6.1]
  def change
    create_table :meal_plans do |t|
      t.string :name
      t.integer :quantity
      t.integer :total_price

      t.timestamps
    end
  end
end
