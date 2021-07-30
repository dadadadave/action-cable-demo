Rails.application.routes.draw do
  root 'homes#show'

  resources :chats, only: %w[index create]
end
