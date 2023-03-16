class AdminsController < ApplicationController

    # FOR TESTING PURPOSES ONLY
    skip_before_action :authorize, only: [ :create, :admin_meal_plans ]
    # DELETE WHEN TESTS COMPLETE
    
    def show   
        render json: @current_user
    end

    def index
        # current_user = User.find_by(id: session[:admin_id])
    end

    def admin_restaurants
        restaurants = @current_user.restaurants
        render json: restaurants, status: :ok
    end

    def admin_meal_plans
        meal_plans = Restaurant.find_by(id: params[:restaurant_id]).meal_plans
        render json: meal_plans, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password_digest)
    end
    
end
