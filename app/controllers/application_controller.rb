class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

   private

   def authorize
    @current_user = Admin.find_by(id: session[:admin_id])
    
    render json: { error: "Not authorized" }, status: :unauthorized unless @current_user
   end

end
