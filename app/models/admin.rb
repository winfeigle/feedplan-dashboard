class Admin < ApplicationRecord
     validates :username, :email, :password, presence: true
     validates :username, uniqueness: true

     has_secure_password

     has_many :restaurants
     has_many :meal_plans
end
