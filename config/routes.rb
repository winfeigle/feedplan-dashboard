Rails.application.routes.draw do

  resources :admins, only: [ :index ]
  resources :restaurants, only: [ :index, :show, :create ]
  resources :menu_items, only: [ :index ]
  



  get '/me', to: 'admins#show'
  # post '/signup', to: 'users#create'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/admin/:admin_id/restaurants", to: "admins#admin_restaurants"


  get "/meal-plans", to: "meal_plans#index"
  get "/meal-plans/:id/restaurants", to: "meal_plans#show"
  post "/meal-plans/create", to: "meal_plans#create"

  get "/restaurants/:id/menu", to: "restaurants#menu"
  post "/restaurants/:id/new-menu-item", to: "restaurants#create_menu_item"

  delete "/restaurants/delete-menu-item/:id", to: "restaurants#delete_menu_item"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
