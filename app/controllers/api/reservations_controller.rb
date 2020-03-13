class Api::ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])
        @reservation.update!(reservation_params)
        render :show
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy!
    end

    private
    def reservation_params
        params.require(:reservation).permit(:time, :user_id, :party_size, :occasion, :requests, :restaurant_id)
    end
end
