class MenuItemsController < ApplicationController
    skip_before_action :authorize, only: [ :index ]

    def index
        render json: MenuItem.all, status: :ok
    end
end
