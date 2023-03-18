class Admin < ApplicationRecord
     has_secure_password

     has_many :restaurants
     has_many :meal_plans
end
