Rails.application.routes.draw do
  
   get '/' => 'static_pages#home'
   get '/gallery' => 'static_pages#gallery'
   get '/merch' => 'static_pages#merch'
   get '/events' => 'static_pages#events'

   get '/home' => 'static_pages#home'
   get '/about' => 'static_pages#about'
   get '/classes' => 'static_pages#classes'
   get '/contact' => 'static_pages#contact'


end
 