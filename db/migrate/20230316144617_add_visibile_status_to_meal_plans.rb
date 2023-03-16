class AddVisibileStatusToMealPlans < ActiveRecord::Migration[6.1]
  def change
    add_column :meal_plans, :visible, :boolean
  end
end
