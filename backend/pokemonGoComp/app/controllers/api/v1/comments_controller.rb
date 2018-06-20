module Api
	module V1
		class CommentsController < ApplicationController
			def create
				comment = Comment.new(comment_params)

				if comment.save
					render json: {data: comment}, status: :ok
				else
					render json: {data: comment.errors}, status: :unprocessable_entity
				end

			end

			private
				def comment_params
					params.permit(:author, :content, :sentiment, :pokemon_id)
				end
		end

	end

end

