class RestaurantsController < ApplicationController
    skip_before_action :authorize, only: [ :delete_menu_item ]

    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    def show
        restaurant = Restaurant.find_by(id: params[:id])
        render json: restaurant, status: :ok
    end

    def create
        new_restaurant = @current_user.restaurants.create!(restaurant_params)

        render json: new_restaurant, status: :created
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

    private

    def restaurant_params
        params.permit(:name, :description, :image_url, :icon_url, :address)
    end

    def menu_item_params
        params.permit(:name, :description, :image_url, :preparation_time, :visible)
    end

end
