import React from 'react';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.filters;
        this.selectDate = this.selectDate.bind(this);
        this.selectParty = this.selectParty.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    selectDate(date) {
        this.setState({ dateParams: date }, () =>
        this.props.updateFilter('dateParams', this.state.dateParams) );
    };

    updateParams(e) {
        this.setState({ searchParams: e.currentTarget.value }, () =>
        this.props.updateFilter('searchParams', this.state.searchParams) );
    };

    selectParty(e) {
        this.setState({ partyParams: e.target.id }, () =>
        this.props.updateFilter('partyParams', this.state.partyParams) );
        this.props.closeModal()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/restaurants');
    }

    generateParties() {
        const maxParty = 10;
        const parties = [];
        for (let i = 2; i <= maxParty; i++) {
            parties.push(
                <div className="party-option" key={i} id={i}>{i} People</div>
            )
        };
        parties.push(
            <div className="party-option" key={maxParty + 1} id='larger'>
                Larger Party
            </div>
        );
        return parties;
    };

    partySelector() {
        if (this.props.modal != 'party-options') return null;

        return (
            <div className="party-options" onClick={this.selectParty}>
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

    render() {
        let partyDesc = `${this.state.partyParams} People`;
        if (this.state.partyParams === 'larger') partyDesc = 'Larger Party';

        return (
            <div className="search-container">
                <div className="date-selector">
                    <i className="far fa-calendar"></i>
                    <DatePicker
                        selected={this.state.dateParams}
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
                        selected={this.state.dateParams}
                        onChange={this.selectDate}
                        className="date-input"
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="h:mm aa"
                        timeCaption=""
                    />
                </div>
                <div className="party-selector" onClick={() => this.props.openModal('party-options')}>
                    <i className="far fa-user"></i>
                    {partyDesc}
                </div>
                {this.handleClick()}
                {this.partySelector()}
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