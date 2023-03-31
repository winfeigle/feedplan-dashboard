class MealPlansController < ApplicationController

    def index
        render json: @current_user.meal_plans, status: :ok
    end

    def create
        new_meal_plan = @current_user.meal_plans.create!(meal_plan_params)
        render json: new_meal_plan, status: :created
    end

    def destroy
        meal_plan = MealPlan.find_by(id: params[:id])

        return render json: { error: "One or more restaurants are still assigned to this meal plan" }, status: :unauthorized unless meal_plan.restaurants.count == 0

        meal_plan.destroy
        head :no_content
    end

    def restaurants
        assigned_restaurants = MealPlan.find_by(id: params[:id]).restaurants
        render json: assigned_restaurants, status: :ok
    end

    def assign_restaurant
        new_assignment = RestaurantsMealPlan.create!(assignment_params)

        render json: new_assignment, status: :created
    end

    def remove_restaurant
        assignment = RestaurantsMealPlan.find_by(assignment_params)

        assignment.destroy
        head :no_content
    end

    private

    def meal_plan_params
        params.permit(:name, :quantity, :total_price)
    end

    def assignment_params
        params.permit(:restaurant_id, :meal_plan_id)
    end
end
