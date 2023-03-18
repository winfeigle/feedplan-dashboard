class AddAdminRefToMealPlans < ActiveRecord::Migration[6.1]
  def change
    add_reference :meal_plans, :admin, null: false, foreign_key: true
  end
end
