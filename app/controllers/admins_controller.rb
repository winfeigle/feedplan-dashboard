class AdminsController < ApplicationController
    
    def show
        byebug
    end

    private

    def user_params
        params.permit(:username, :password_digest)
    end
    
end
