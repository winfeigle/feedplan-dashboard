class RestaurantsMealPlanController < ApplicationController
    skip_before_action :authorize, only: [ :index ]
    
    def index
        render json: RestaurantsMealPlan.all, status: :ok
    end
end
