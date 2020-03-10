import React from 'react';
import { connect } from 'react-redux'
import { fetchRestaurant } from '../actions/restaurant_actions';
import { fetchUser } from '../actions/user_actions'

class Reservation extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurant(this.props.params.id)
        this.props.fetchUser(this.props.userId)
    }

    loaded() {
        if (this.props.restaurant && this.props.user) {
            return (
                <div className="res-page">
                    <h2>You're almost done!</h2>
                    <div className="res-info">
                        <img src={this.props.restaurant.photoUrl} alt=""/>
                        {`${this.props.restaurant.name} - ${this.props.restaurant.city}`}
                        {/* Reservation Details From Button */}
                    </div>
                    <div className="res-form">
                        {`${this.props.user.firstName} ${this.props.user.lastName}`}
                    </div>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="reservation-form">
                {this.loaded()}
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    userId: state.session.userId,
    user: state.entities.users[state.session.userId],
    params: ownProps.match.params
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reservation)