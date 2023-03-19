Rails.application.routes.draw do

  resources :admins, only: [ :index ]
  resources :restaurants, only: [ :index, :show, :create ]
  resources :meal_plans, only: [ :index, :show ]
  resources :menu_items, only: [ :index ]



  get '/me', to: 'admins#show'
  # post '/signup', to: 'users#create'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/admin/:admin_id/restaurants", to: "admins#admin_restaurants"

  get "/meal-plans", to: "meal_plans#index"

  # GETTING/ASSIGNING MEAL PLANS TO RESTAURANTS
  get "/meal-plans/assignments", to: "restaurants_meal_plan#index"

  # get "/meal-plans/:meal_plan_id", to: "restaurants_meal_plan#show"

  post "/meal-plans/new-assignment", to: "restaurants_meal_plan#create"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
