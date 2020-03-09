import React from 'react';

const cuisines = ['French', 'Greek', 'Steakhouse', 'Seafood', 'American', 'Italian', 'Tapas', 'Japanese', 'Mexican', 'Sushi'];
const cities = ["New York", 'San Francisco', 'Chicago', 'Los Angeles', 'Miami', 'Las Vegas'];

class IndexSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.updateCurrent = this.updateCurrent.bind(this);
    }

    updateCurrent(filter) {
        return (e) => this.props.updateToggleFilter(filter, e.target.value)
    };

    generateOptions(optionsArray, arrayType) {
        let options = optionsArray.map( option => (
            <div className={`option ${arrayType}`} key={option} id={option}>
                <input type="checkbox" value={option} onClick={this.updateCurrent(arrayType)}/> {option}
            </div>
        ));
        return options;
    };

    render() {
        return (
            <div className="side-bar">
                <h2>Price</h2>
                <div className="sidebar-divider" />
                {this.generateOptions(['$', '$$', '$$$'], 'priceParams')}
                <div className="sidebar-spacer" />
                <h2>Cuisines</h2>
                <div className="sidebar-divider" />
                {this.generateOptions(cuisines, 'cuisineParams')}
                <div className="sidebar-spacer" />
                <h2>Cities</h2>
                <div className="sidebar-divider" />
                {this.generateOptions(cities, 'cityParams')}
            </div>
        )
    };
};

export default IndexSidebar;