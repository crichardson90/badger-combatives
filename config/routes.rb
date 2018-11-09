Rails.application.routes.draw do
  
   get '/' => 'static_pages#home'
   get '/gallery' => 'photos#index'
   post '/gallery' => 'photos#create'
   get '/merch' => 'products#index'
   post '/merch' => 'products#create'

   get '/home' => 'static_pages#home'
   get '/reviews' => 'static_pages#reviews'
   get '/about' => 'static_pages#about'
   get '/classes' => 'static_pages#classes'

end
