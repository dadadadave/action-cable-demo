Rails.application.routes.draw do
  root 'homes#show'

  resources :chats, only: %w[index create show], param: :name do
    resources :messages, only: %w[create]
  end
end
