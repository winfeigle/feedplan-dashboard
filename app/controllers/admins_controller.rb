class AdminsController < ApplicationController
    skip_before_action :authorize, only: [ :create ]
    
    def show   
        render json: @current_user
    end

    def create
        admin = Admin.create!(user_params)
        session[:admin_id] = admin.id
        render json: admin, status: :created
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
        params.permit(:username, :email, :password, :password_confirmation)
    end
    
end
