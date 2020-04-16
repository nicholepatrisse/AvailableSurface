import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { changeFilter, toggleFilter } from '../../actions/filter_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => ({
    filters: state.ui.filters,
    restaurants: state.entities.restaurants,
    loading: state.ui.loading.restaurantsLoading,
    toggles: state.ui.toggles
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: filters => dispatch(fetchRestaurants(filters)),
    updateToggleFilter: (filter, value) => dispatch(toggleFilter(filter, value)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantIndex);