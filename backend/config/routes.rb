Rails.application.routes.draw do
  resources :users
  resources :reviews
  post "auth/login", to: "authentication#login"
  # get "*/a", to: "application#not_found"
end
