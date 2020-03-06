import React from 'react';

class PartySelect extends React.Component {
    constructor(props) {
        super(props)
        this.selectParty = this.selectParty.bind(this);
    }

    partySizeOptions() {
        const parties = [];

        for (let i = 2; i <= 10; i++) {
            parties.push(
                <div className="party-option" key={i} id={i}>{i} People</div>
            )
        };

        parties.push(
            <div className="party-option" key='21' id='larger'>Larger Party</div>
        );

        return parties;
    };

    handleClick() {
        if (this.props.modal === 'party-options') {
            document.addEventListener('click', this.props.closeModal)
        } else {
            document.removeEventListener('click', this.props.closeModal)
        }
    };

    selectParty(e) {
        let partyParam = { party: e.target.id }
        this.props.recievePartyParam(partyParam)
        this.props.closeModal()
    }

    selectorOpen() {
        return (
            <div className="party-box" onClick={this.selectParty}>
                {this.partySizeOptions()}
            </div>
        );
    };

    selectorClosed() {
        return (
            <div className="party-option party-box" onClick={() => this.props.openModal('party-options')}>
                {`${this.props.party} People`}
            </div>
        )
    }

    render() {
        return (
            <div className="party-selector">
                {this.handleClick()}
                {(this.props.modal === 'party-options') ?
                this.selectorOpen() :
                this.selectorClosed()}
            </div>
        )
    }
};

export default PartySelect;