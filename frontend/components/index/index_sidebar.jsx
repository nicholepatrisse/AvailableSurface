import React from 'react';

class IndexSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            '$$': false,
            '$$$': false,
            '$$$': false,
        };

        this.updateCurrent = this.updateCurrent.bind(this);
        this.togglePrice = this.togglePrice.bind(this);
    }

    updateCurrent(filter) {
        return (e) => this.props.updateToggleFilter(filter, e.target.value)
    };

    generateOptions(arrayType) {
        let cuisinesHash = {};
        let citiesHash = {};
        this.props.restaurants.forEach(restaurant => {
            let fullCity = `${restaurant.city}, ${restaurant.state}`;
            cuisinesHash[restaurant.cuisine] = true;
            citiesHash[fullCity] = true;
        });

        let optionsArray;
        if (arrayType === 'cuisineParams') {
            optionsArray = Object.keys(cuisinesHash);
        } else {
            optionsArray = Object.keys(citiesHash);
        };
        let options = optionsArray.map( option => (
            <div className={`option ${arrayType}`} key={option} id={option}>
                <input type="checkbox" value={option} onClick={this.updateCurrent(arrayType)}/> {option}
            </div>
        ));

        return options;
    };

    togglePrice(e) {
        this.props.updateToggleFilter('priceParams', e.target.id)
        this.setState({ [e.target.id]: !this.state[e.target.id] })
    };

    render() {
        return (
            <div className="sidebar">
                <h2>Price</h2>
                <div className="price-options">
                    <div className={`price-option-container first ${this.state.$$ ? 'toggled' : 'untoggled'}`} onClick={this.togglePrice} id="$$">
                        $$
                    </div>
                    <div className={`price-option-container ${this.state.$$$ ? 'toggled' : 'untoggled'}`} onClick={this.togglePrice} id="$$$">
                        $$$
                    </div>
                    <div className={`price-option-container last ${this.state.$$$$ ? 'toggled' : 'untoggled'}`} onClick={this.togglePrice} id="$$$$">
                        $$$$
                    </div>
                </div>
                <div className="sidebar-spacer" />
                <h2>Cuisines</h2>
                <div className="sidebar-divider" />
                {this.generateOptions('cuisineParams')}
                <div className="sidebar-spacer" />
                <h2>Cities</h2>
                <div className="sidebar-divider" />
                {this.generateOptions('cityParams')}
            </div>
        )
    };
};

export default IndexSidebar;