import React from 'react';

class PartyPicker extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.selectParty = this.selectParty.bind(this);
    };

    selectParty(e) {
        this.props.changeFilter('partyParams', e.target.id);
        this.props.closeModal();
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
        let partyDesc = `${this.props.partyParams} People`;
        if (this.props.partyParams === 'larger') partyDesc = 'Larger Party';


        return (
            <div className="party-picker">
                <div className="party-selector" onClick={() => this.props.openModal('party-options')}>
                    <i className="far fa-user"></i>
                    {partyDesc}
                </div>
                { this.handleClick() }
                <div className="party-selector-menu">
                    { this.partySelector() }
                </div>
            </div>
        )
    }
}

export default PartyPicker;