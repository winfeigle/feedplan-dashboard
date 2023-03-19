class RestaurantsMealPlanController < ApplicationController
    skip_before_action :authorize, only: [ :index, :show, :create ]

    def index
        render json: RestaurantsMealPlan.all, status: :ok
    end

    def show
        meal_plan_assignments = RestaurantsMealPlan.find_by!(meal_plan_id: params[:meal_plan_id])

        render json: meal_plan_assignments, status: :ok,
        serializer: MealPlanAssignmentsSerializer
    end

    def create
        assigned_meal_plan = RestaurantsMealPlan.create!(assignment_params)
        render json: assigned_meal_plan, status: :created
    end

    private

    def assignment_params
        params.permit(:restaurant_id, :meal_plan_id)
    end

end
