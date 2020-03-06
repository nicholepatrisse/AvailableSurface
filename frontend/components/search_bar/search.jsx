import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import TimeSelect from './time_select';
import { recieveTimeParam, recievePartyParam } from '../../actions/search_actions';
import DateSelect from './date_select';
import PartySelect from './party_select';

class Search extends React.Component {
    render() {
        return (
            <div className="search-container">
                <DateSelect 
                    modal={this.props.modal}
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}
                    date={this.props.searchParams.date}
                />
                <TimeSelect 
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}
                    modal={this.props.modal}
                    recieveTimeParam={this.props.recieveTimeParam}
                    time={this.props.searchParams.time}
                />
                <PartySelect 
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}
                    modal={this.props.modal}
                    recievePartyParam={this.props.recievePartyParam}
                    party={this.props.searchParams.party}
                />
                {/* Party Selector */}
                <div className="search-bar">
                    I'm a search bar!!!
                </div>
                <button className="search-button">Let's go</button>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    modal: state.ui.modal,
    searchParams: state.ui.search
});

const mapDispatchToProps = dispatch => ({
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    recieveTimeParam: param => dispatch(recieveTimeParam(param)),
    recievePartyParam: param => dispatch(recievePartyParam(param))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);