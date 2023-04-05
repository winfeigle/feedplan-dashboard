class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        admin = Admin.find_by(username: params[:username])
        
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id 
            render json: admin, status: :created
        else
            render json: {Error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        reset_session
        head :no_content
    end
end
