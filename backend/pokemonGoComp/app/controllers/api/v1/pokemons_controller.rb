module Api
	module V1
		class PokemonsController < ApplicationController
			def index
				pokemons = Pokemon.all;
				render json: {data: pokemons}, status: :ok
			end	

			def show
				pokemon = Pokemon.find_by(dex: params[:dex])
				if pokemon.nil?
					render json: {data:nil}, status: :unprocessable_entity
				else
					render json: {data:pokemon}, status: :ok
				end
			end
		end
	end
end
