class CreateRestaurantsMealPlans < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants_meal_plans do |t|

      t.timestamps
    end
  end
end
