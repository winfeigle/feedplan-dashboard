Rails.application.routes.draw do

  resources :admins, only: [ :index ]
  resources :restaurants, only: [ :index, :show, :create ]
  resources :meal_plans, only: [ :index ]


  get '/me', to: 'admins#show'
  # post '/signup', to: 'users#create'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/admin/:admin_id/restaurants", to: "admins#admin_restaurants"

   get "/admin/:restaurant_id/meal-plans", to: "admins#admin_meal_plans"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
