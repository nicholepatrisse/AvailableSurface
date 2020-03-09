class Api::ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new()
    end

    def update
    end

    def destroy
    end

    private
    def reservation_params
        params.require(:reservation).permit(:time, :party_size, :occasion, :requests)
    end
end
