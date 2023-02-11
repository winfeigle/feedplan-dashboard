class SessionsController < ApplicationController

    def create
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id 
            render json: admin, status: :created
        else
            render json: {Error: "Invalid username or password"}, status: :unauthorized
        end
    end
end
