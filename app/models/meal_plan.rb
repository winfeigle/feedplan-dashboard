class MealPlan < ApplicationRecord
    validates :name, exclusion: { in: ["meal", "plan"], case_sensitive: false, message: "Don't include meal plan in the name" }

    belongs_to :restaurant
end
