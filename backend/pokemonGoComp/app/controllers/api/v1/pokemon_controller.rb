module Api
	module V1
		class PokemonController < ApplicationController
			def index
				pokemon = Pokemon.all;
				render json: {data: pokemon}, status: :ok
			end	

			def show
				pokemon = Pokemon.find_by(dex: params[:dex])
				if pokemon.nil?
					render json: {data:nil}, status: :unprocessable_entity
				else
					comments = pokemon.comments
					render json: {data:pokemon, comments: comments}, status: :ok
				end
			end
		end
	end
end
