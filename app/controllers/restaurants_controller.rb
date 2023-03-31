class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        render json: restaurants, serializer: :RestaurantSerializer, status: :ok
    end

    def show
        restaurant = Restaurant.find_by(id: params[:id])
        render json: restaurant, serializer: :RestaurantSerializer, status: :ok
    end

    def create
        new_restaurant = @current_user.restaurants.create!(restaurant_params)

        render json: new_restaurant, status: :created
    end

    def destroy
        restaurant = Restaurant.find_by(id: params[:id])
        restaurant.destroy
        head :no_content
    end

    def update
        updated_restaurant = Restaurant.find_by(id: params[:id]).update!(restaurant_params)

        render json: updated_restaurant, status: :accepted
    end

    def menu
        items = Restaurant.find_by(id: params[:id]).menu_items
        render json: items, status: :ok 
    end

    def create_menu_item
        menu_item = Restaurant.find_by(id: params[:id]).menu_items.create!(menu_item_params)
        render json: menu_item, status: :created
    end

    def delete_menu_item
        menu_item = MenuItem.find_by(id: params[:id])
        menu_item.destroy
        head :no_content
    end

    def update_menu_item
        menu_item = MenuItem.find_by(id: params[:id]).update!(menu_item_params)

        render json: menu_item, status: :ok
    end



    private

    def restaurant_params
        params.permit(:name, :description, :image_url, :icon_url, :address, :live)
    end

    def menu_item_params
        params.permit(:name, :description, :image_url, :preparation_time, :visible)
    end

end
