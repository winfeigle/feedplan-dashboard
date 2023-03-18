class RemoveRefFromMealPlans < ActiveRecord::Migration[6.1]
  def change
    remove_column :meal_plans, :restaurant_id, null: false, foreign_key: true
  end
end
