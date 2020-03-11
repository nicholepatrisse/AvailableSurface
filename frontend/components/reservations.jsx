import React from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/user_actions';
import ReservationItem from './reservation_item';

class Reservations extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
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
        let pastReszies = Object.values(this.props.reservations).filter( reszie => (
            new Date(reszie.time) <= new Date()
        )).sort(this.sortDates);
        return pastReszies;
    };

    futureReservations() {
        let futureReszies = Object.values(this.props.reservations).filter(reszie => (
            new Date(reszie.time) > new Date()
        )).sort(this.sortDates);
        return futureReszies;
    };

    render() {
        let pastReszies = this.pastReservations().map( reszie => (
            <ReservationItem 
                reszie={reszie} 
                restaurants={this.props.restaurants} 
                key={reszie.id}
                editForm={false}
            />
        ));

        let futureReszies = this.futureReservations().map( reszie => (
            <ReservationItem 
                reszie={reszie} 
                restaurants={this.props.restaurants} 
                key={reszie.id}
                editForm={true}
            />
        ));

        return (
            <div className="reservations-container">
                <div className="upcoming-reservations">
                    <h2>Upcoming Reservations</h2>
                    {futureReszies}
                </div>
                <div className="past-reservations">
                    <h2>Past Reservations</h2>
                    {pastReszies}
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => ({
    userId: state.session.userId,
    reservations: state.entities.reservations,
    restaurants: state.entities.restaurants,
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reservations);