class Api::ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save 
            render `/api/users/#{@reservation.user_id}`
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
    end

    def destroy
    end

    private
    def reservation_params
        params.require(:reservation).permit(:time, :user_id, :party_size, :occasion, :requests, :restaurant_id)
    end
end
