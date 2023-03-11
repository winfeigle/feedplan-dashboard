class AdminsController < ApplicationController
    skip_before_action :authorize, only: [ :create, :admin_restaurants ]
    
    def show   
        render json: @current_user
    end

    def index
        # current_user = User.find_by(id: session[:admin_id])
    end

    def admin_restaurants
        restaurants = Restaurant.all.where('admin_id = ?', params[:admin_id])
        render json: restaurants, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password_digest)
    end
    
end
