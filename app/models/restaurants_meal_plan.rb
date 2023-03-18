class RestaurantsMealPlan < ApplicationRecord
    belongs_to :restaurant
    belongs_to :meal_plan
end
