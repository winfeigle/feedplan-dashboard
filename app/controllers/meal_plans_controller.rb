class MealPlansController < ApplicationController
    #  skip_before_action :authorize, only: [ :index ]

    def index
        render json: @current_user.meal_plans, status: :ok
    end

    def show
        restaurants = RestaurantsMealPlan.where("meal_plan_id = ?", params[:meal_plan_id])

        render json: restaurants, status: :ok
    end
end
