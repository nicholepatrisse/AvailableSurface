import React from 'react';
import ReservationButtons from './reservation_buttons';
import DatePicker from 'react-datepicker';

const price = {
    1: '$',
    2: '$$',
    3: '$$$',
    4: '$$$$'
};

class RestaurantPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({}, this.props.filters);
        this.selectDate = this.selectDate.bind(this);
        this.selectParty = this.selectParty.bind(this);
    };
    
    componentDidMount() {
        this.props.fetchRestaurant(this.props.restaurantId)
    };

    selectDate(date) {
        this.setState({ dateParams: date }, () => (
            this.props.changeFilter('dateParams', date)
        ));
    };

    selectParty(e) {
        this.setState({ partyParams: e.target.id }), () => (
            this.props.changeFilter('partyParams', e.target.id));
    };

    generateParties() {
        const maxParty = 10;
        const parties = [];
        for (let i = 2; i <= maxParty; i++) {
            parties.push(
                <div className="party-show-option" key={i} id={i}>{i} People</div>
            )
        };
        parties.push(
            <div className="party-show-option" key={maxParty + 1} id='larger'>
                Larger Party
            </div>
        );
        return parties;
    };

    partySelector() {
        if (this.props.modal != 'party-options') return null;
        return (
            <div className="show-party-options" onClick={this.selectParty}>
                {this.generateParties()}
            </div>
        );
    };

    handleClick() {
        if (this.props.modal === 'party-options') {
            document.addEventListener('click', this.props.closeModal)
        } else {
            document.removeEventListener('click', this.props.closeModal)
        }
    };

    loaded() {
        let partyDesc = `${this.state.partyParams} People`;
        if (this.state.partyParams === 'larger') partyDesc = 'Larger Party';
        let headerUrl = this.props.restaurant.photoUrls[0];

        return (
            <div className="restaurant-show">
                <div className="img-header">
                </div>
                <div className="restaurant-show-main">
                    <ul className="restaurant-links">
                        <li>Overview</li>
                        <li>Reviews</li>
                    </ul>
                    <h2>{this.props.restaurant.name}</h2>
                    <ul className="restaurant-desc">
                        <li>{price[this.props.restaurant.price]}</li>
                        <li>{this.props.restaurant.cuisine}</li>
                        <li>{`${this.props.restaurant.city}, ${this.props.restaurant.state}`}</li>
                    </ul>
                    {this.props.restaurant.description}
                </div>
                <div className="restaurant-show-side">
                    <h2>Make a reservation</h2>
                    <div className="sidebar-divider"></div>
                    <div className="sidebar-search">
                        <h3>Party Size</h3>
                        <div className="sidebar-party-selector" onClick={() => this.props.openModal('party-options')}>
                            {partyDesc}
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        {this.handleClick()}
                        {this.partySelector()}
                        <div className="sidebar-datetime">
                            <div className="sidebar-date">
                                <h3>Date</h3>
                                <i className="fas fa-chevron-down"></i>
                                <DatePicker
                                    selected={new Date(this.state.dateParams)}
                                    onChange={this.selectDate}
                                    className="date-input"
                                    dateFormat="MMM d, yyyy"
                                    nextMonthButtonLabel=">"
                                    previousMonthButtonLabel="<"
                                />
                            </div>
                            <div className="sidebar-time">
                                <h3>Time</h3>
                                <i className="fas fa-chevron-down"></i>
                                <DatePicker
                                    selected={new Date(this.state.dateParams)}
                                    onChange={this.selectDate}
                                    className="date-input"
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="h:mm aa"
                                    timeCaption=""
                                />
                            </div>
                        </div>
                    </div>
                    <h3>Select a time:</h3>
                    <ReservationButtons
                        restaurant={this.props.restaurant}
                        time={this.props.filters.dateParams}
                        changeFilter={this.props.changeFilter}
                    />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="restaurant-page">
                {this.props.restaurant ?
                this.loaded() :
                null}
            </div>
        )
    };
}

export default RestaurantPage;