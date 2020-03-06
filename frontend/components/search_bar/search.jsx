import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import TimeSelect from './time_select';
import { recieveTimeParam } from '../../actions/search_actions';

class Search extends React.Component {

    partySizeOptions() {
        const parties = [];

        for (let i = 2; i <= 20; i++) {
            parties.push(
                <option key={i} value={i}>{i} People</option>
            )
        };

        parties.push(
            <option key='21' value='larger'>Larger Party</option>
        );

        return parties;
    }

    render() {
        return (
            <div className="search-container">
                {/* Date Selector */}
                <TimeSelect 
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}
                    modal={this.props.modal}
                    recieveTimeParam={this.props.recieveTimeParam}
                    time={this.props.searchParams.time}
                />
                {/* Party Selector */}
                {/* General Search */}
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);