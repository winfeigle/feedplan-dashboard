class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :image_url, :icon_url, :live, :menu_items, :meal_plans

  def menu_items
    object.menu_items.count
  end

  def meal_plans
    object.meal_plans.count
  end
end
