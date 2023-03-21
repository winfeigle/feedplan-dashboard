class MealPlansController < ApplicationController
    #  skip_before_action :authorize, only: [ :index ]

    def index
        render json: @current_user.meal_plans, status: :ok
    end

    def show
        restaurants = @current_user.meal_plans.find_by(id: params[:id]).restaurants.all

        render json: restaurants, status: :ok
    end

    def create
        byebug
    end
end
