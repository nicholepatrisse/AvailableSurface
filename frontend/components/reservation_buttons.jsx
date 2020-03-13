import React from 'react';
import * as dateTime from '../util/date_time_functions';
import { withRouter } from 'react-router-dom';

class ReservationButtons extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    available(time) {
        let currentTime = new Date();
        if (time.getHours() >= this.props.restaurant.openAt && time.getHours() < this.props.restaurant.closeAt && time > currentTime) {
            return true;
        } else {
            return false;
        };
    };

    handleClick(e) {
        let timeValue = new Date(e.target.id)
        timeValue = new Date(timeValue.setMinutes(timeValue.getMinutes() - 15))
        this.props.changeFilter('dateParams', timeValue)
        this.props.history.push(`/restaurants/${this.props.restaurant.id}/reserve`)
    }

    generateReservationLinks() {
        let buttons = [];
        let time = new Date(this.props.time);
        time = new Date(time.setMinutes(time.getMinutes() - 30));
        let i = 0;
        while (buttons.length < 5) {
            let button;
            if (this.available(time)) {
                button = (
                    <button key={i} className={`res-button`} id={time} onClick={this.handleClick}>
                        {dateTime.printTime(time)}
                    </button>
                )
            } else {
                button = (
                    <button key={i} className={`res-button res-inactive`} disabled >
                        Unavailable
                    </button>
                )
            }
            buttons.push(button)
            time = new Date(time.setMinutes(time.getMinutes() + 15))
            i++;
        };
        return buttons;
    };

    render () {
        return (
            <div className="res-buttons">
                {this.generateReservationLinks()}
            </div>
        )
    }
};

export default withRouter(ReservationButtons);