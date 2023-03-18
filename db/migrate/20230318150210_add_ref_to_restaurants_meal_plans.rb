class AddRefToRestaurantsMealPlans < ActiveRecord::Migration[6.1]
  def change
    add_reference :restaurants_meal_plans, :restaurant, null: false, foreign_key: true
    add_reference :restaurants_meal_plans, :meal_plan, null: false, foreign_key: true
  end
end
