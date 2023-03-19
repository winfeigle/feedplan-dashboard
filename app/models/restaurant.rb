class Restaurant < ApplicationRecord
    belongs_to :admin
    has_many :meal_plans, through: :restaurants_meal_plans
    has_many :menu_items
end
