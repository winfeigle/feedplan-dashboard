class MealPlanAssignmentsSerializer < ActiveModel::Serializer
  attributes :id, :meal_plan_id
  has_one :restaurant
end
