class MealPlansController < ApplicationController
     skip_before_action :authorize, only: [ :index ]

    def index
        meal_plans = @current_user.meal_plans
        render json: meal_plans, status: :ok
    end

end
