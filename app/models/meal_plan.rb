class MealPlan < ApplicationRecord
    validates :name, exclusion: { in: ["meal", "plan"], case_sensitive: false, message: "Don't include meal plan in the name" }

    belongs_to :admin
    has_many :restaurants_meal_plans
    has_many :restaurants, through: :restaurants_meal_plans
end
