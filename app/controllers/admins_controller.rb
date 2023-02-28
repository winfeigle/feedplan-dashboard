class AdminsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def show
        render json: @current_user
    end

    def index
        # current_user = User.find_by(id: session[:admin_id])
    end

    private

    def user_params
        params.permit(:username, :password_digest)
    end
    
end
