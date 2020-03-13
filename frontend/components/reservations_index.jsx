import React from 'react';
import ReservationItem from './reservation_item';

class ReservationsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        this.props.fetchRestaurants();
    };

    sortDates(res1, res2) {
        // newest to oldest
        if (new Date(res1.time) > new Date(res2.time)) {
            return 1;
        } else if (new Date(res1.time) < new Date(res2.time)) {
            return -1;
        } else {
            return 0;
        }
    }

    pastReservations() {
        let pastReservationsArray = Object.values(this.props.reservations)
        .filter( currentReservation => (
            new Date(currentReservation.time) <= new Date()
        )).sort(this.sortDates);
        return pastReservationsArray;
    };

    futureReservations() {
        let futureReservationsArray = Object.values(this.props.reservations)
        .filter(currentReservation => (
            new Date(currentReservation.time) > new Date()
        )).sort(this.sortDates);
        return futureReservationsArray;
    };

    render() {
        if (Object.values(this.props.restaurants).length === 0) {
            return null;
        };

        let pastReservationsArray = this.pastReservations()
        .map( reservation => (
            <ReservationItem 
                reservation={reservation} 
                restaurant={this.props.restaurants[reservation.restaurantId]} 
                key={reservation.id}
                editForm={false}
                changeFilter={this.props.changeFilter}
                deleteReservation={this.props.deleteReservation}
            />
        ));

        let futureReservationsArray = this.futureReservations()
        .map( reservation => (
            <ReservationItem 
                reservation={reservation} 
                restaurant={this.props.restaurants[reservation.restaurantId]} 
                key={reservation.id}
                editForm={true}
                changeFilter={this.props.changeFilter}
                deleteReservation={this.props.deleteReservation}
            />
        ));

        return (
            <div className="reservations-container">
                <div className="upcoming-reservations">
                    <h2>Upcoming Reservations</h2>
                    {futureReservationsArray}
                </div>
                <div className="past-reservations">
                    <h2>Past Reservations</h2>
                    {pastReservationsArray}
                </div>
            </div>
        )
    };
};

export default ReservationsIndex;