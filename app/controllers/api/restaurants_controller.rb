class Api::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.with_attached_photos.all.includes(:reservations)
        
        if !params[:filters]
            return @restaurants
        end
        
        hour = params[:filters][:dateParams].to_datetime.hour
        @restaurants = @restaurants.where('open_at <= ?', hour).where('close_at > ?', hour).includes(:reservations)
        
        cityParams = params[:filters][:cityParams]
        if cityParams && cityParams.length > 0 
            @restaurants = @restaurants.where('city IN (?)', cityParams)
        end
        
        cuisineParams = params[:filters][:cuisineParams]
        if cuisineParams && cuisineParams.length > 0 
            @restaurants = @restaurants.where('cuisine IN (?)', cuisineParams)
        end
        
        priceParams = params[:filters][:priceParams]
        if priceParams && priceParams.length > 0
            priceParams.map! { |price| price.length }
            @restaurants = @restaurants.where('price IN (?)', priceParams)
        end

        searchParams = params[:filters][:searchParams].split(' ').map! { |param| "%#{param}%"}
        if searchParams.length > 0
            @restaurants = @restaurants.where('cuisine ILIKE ANY ( array[?] )', searchParams)
                .or(@restaurants.where('city ILIKE ANY ( array[?] )', searchParams))
        end
    end

    def show
        @restaurant = Restaurant.find(params[:id])
    end

end
