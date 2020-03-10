import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { updateFilter, updateToggleFilter } from '../../actions/filter_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => ({
    filters: state.ui.filters,
    restaurants: state.entities.restaurants,
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: filters => dispatch(fetchRestaurants(filters)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updateToggleFilter: (filter, value) => dispatch(updateToggleFilter(filter, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantIndex);