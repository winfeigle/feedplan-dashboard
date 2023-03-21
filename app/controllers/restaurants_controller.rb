class RestaurantsController < ApplicationController
    skip_before_action :authorize, only: [ :create ]

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

    private

    def restaurant_params
        params.permit(:name, :description, :image_url, :icon_url, :address)
    end

end
