class MealPlansController < ApplicationController
    #  skip_before_action :authorize, only: [ :index ]

    def index
        user_meal_plans = @current_user.meal_plans
        render json: user_meal_plans, status: :ok
    end

end
