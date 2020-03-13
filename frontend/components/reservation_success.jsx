import React from 'react';
import { connect } from 'react-redux';
import ReservationItem from './reservation_item';
import { Link } from 'react-router-dom';

const ReservationSuccess = props => {
    let reservations = Object.values(props.reservations);
    let reservation = reservations[reservations.length - 1];
    if (!reservation) return null;
    return (
        <div className="res-success">
            <h2>Success!</h2>
            <ReservationItem 
                reservation={reservation}
                restaurant={props.restaurants[reservation.restaurantId]}
                key={reservation.id}
                editForm={false}
            />
            <Link to="/reservations">See my reservations</Link>
        </div>
    );
};

const mapStateToProps = state => ({
    reservations: state.entities.reservations,
    restaurants: state.entities.restaurants,
})

export default connect(
    mapStateToProps,
    null
)(ReservationSuccess)