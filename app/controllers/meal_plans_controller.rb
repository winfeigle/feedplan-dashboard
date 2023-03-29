class MealPlansController < ApplicationController
    #  skip_before_action :authorize, only: [ :index ]

    def index
        render json: @current_user.meal_plans, status: :ok
    end

    def create
        new_meal_plan = @current_user.meal_plans.create!(meal_plan_params)
        render json: new_meal_plan, status: :created
    end

    def restaurants
        assigned_restaurants = MealPlan.find_by(id: params[:id]).restaurants
        render json: assigned_restaurants, status: :ok
    end

    def assign
        byebug
    end

    def remove_restaurant
        byebug
    end

    private

    def meal_plan_params
        params.permit(:name, :quantity, :total_price)
    end
end
