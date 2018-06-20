Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
	namespace 'v1' do
		resources :pokemon, param: :dex, only: [:index, :show]
		resources :comments, only: [:create]
	end
  end
end
