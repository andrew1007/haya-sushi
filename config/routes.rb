Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'react_hook#root'
  namespace :api, defaults: {format: :json} do
    resource :section, only: [:show]
    resource :option, only: [:show]
  end
end
