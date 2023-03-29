class MealPlanSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :total_price, :restaurants


  def restaurants
    object.restaurants.map { |restaurant| {restaurant_id: restaurant.id} }
  end
end
