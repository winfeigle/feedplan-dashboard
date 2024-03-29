Rails.application.routes.draw do

  resources :admins, only: [ :index, :create ]
  resources :restaurants, only: [ :index, :show, :create, :destroy ]
  resources :menu_items, only: [ :index ]
  



  get '/me', to: 'admins#show'
  post '/signup', to: 'admins#create'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/admin/:admin_id/restaurants", to: "admins#admin_restaurants"


  get "/meal-plans", to: "meal_plans#index"
  delete "/meal-plans/:id", to: "meal_plans#destroy"
  post "/meal-plans/create", to: "meal_plans#create"

  # add/remove restaurants from meal plans
   get "/meal-plans/:id/restaurants", to: "meal_plans#restaurants"
  post "/meal-plan-assignment", to: "meal_plans#assign_restaurant"
  delete "/meal-plan-assignment", to: "meal_plans#remove_restaurant"


  patch "/restaurants/:id/update", to: "restaurants#update"
  get "/restaurants/:id/menu", to: "restaurants#menu"
  post "/restaurants/:id/new-menu-item", to: "restaurants#create_menu_item"

  delete "/restaurants/delete-menu-item/:id", to: "restaurants#delete_menu_item"
  patch "/restaurants/update-menu-item/:id", to: "restaurants#update_menu_item"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
