import React from 'react';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom'
import PartyPicker from './party_picker';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({}, this.props.filters);
        this.selectDate = this.selectDate.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    selectDate(date) {
        this.setState({ dateParams: date });
    };

    updateParams(e) {
        this.setState({ searchParams: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateFilters(this.state);
        this.props.history.push('/restaurants');
    }

    render() {
        return (
            <div className="search-container">
                <div className="date-selector">
                    <i className="far fa-calendar"></i>
                    <DatePicker
                        selected={new Date(this.state.dateParams)}
                        onChange={this.selectDate}
                        className="date-input"
                        dateFormat="MMM d, yyyy"
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                    />
                </div>
                <div className="time-selector">
                    <i className="far fa-clock"></i>
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
                <PartyPicker
                    modal={this.props.modal}
                    closeModal={this.props.closeModal}
                    openModal={this.props.openModal}
                    partyParams={this.props.filters.partyParams}
                    changeFilter={this.props.changeFilter}
                />
                <div className="search-bar">
                    <input 
                        className="search-input"
                        type="text"
                        value={this.state.searchParams}
                        onChange={this.updateParams}
                    />
                </div>
                <button className="search-button" onClick={this.handleSubmit}>Let's go</button>
            </div>
        )
    }
};

export default withRouter(Search);