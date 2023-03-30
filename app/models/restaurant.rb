class Restaurant < ApplicationRecord
    validates :name, :description, :address, presence: true
    
    belongs_to :admin
    has_many :restaurants_meal_plans
    has_many :meal_plans, through: :restaurants_meal_plans
    has_many :menu_items
end
