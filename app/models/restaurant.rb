class Restaurant < ApplicationRecord
    belongs_to :admin
    has_many :meal_plans
end
