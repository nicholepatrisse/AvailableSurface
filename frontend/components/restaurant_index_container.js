import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../actions/restaurant_actions';

const mapStateToProps = state => ({
    filters: state.ui.filters,
    restaurants: state.entities.restaurants,
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: params => dispatch(fetchRestaurants(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantIndex);