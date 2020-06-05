class Api::RatingsController < ApplicationController
    def create
        @rating = Rating.new(rating_params)

        if @rating.save
            render :show
        else
            render json: @rating.errors.full_messages, status: 422
        end
    end

    def update
        @rating = Rating.find(params[:id])
        @rating.update!(rating_params)
        render :show
    end

    def destroy
        @rating = Rating.find(params[:id])
        @rating.destroy!
    end

    def rating_params
        params.require(:rating).permit(:overall, :food, :ambiance, :user_id, :restaurant_id, :reservation_id)
    end
end
