import React from 'react';
import { Link } from 'react-router-dom'

class ReservationButtons extends React.Component {
    printTime(time) {
        let minute = time.getMinutes();
        let hour = time.getHours();
        let ampm = 'AM'
        if (hour === 12) {
            ampm = 'PM';
        } else if (hour === 0) {
            hour = 12;
        } else if (hour > 12) {
            hour -= 12;
            ampm = "PM";
        };
        if (minute < 10) minute = `0${minute}`;
        return `${hour}:${minute} ${ampm}`
    }

    available(time) {
        let currentTime = new Date();
        if (time.getHours() >= this.props.restaurant.openAt && time.getHours() < this.props.restaurant.closeAt && time > currentTime) {
            return true;
        } else {
            return false;
        };
    };

    generateReservationLinks(num) {
        let buttons = [];
        let time = new Date(this.props.time);
        let inc = 15 * Math.floor(num / 2);
        time = new Date(time.setMinutes(time.getMinutes() - inc));
        let i = 0;
        while (buttons.length < num) {
            let button;
            if (this.available(time)) {
                button = (
                    <button key={i} className={`res-button`}>
                        <Link to={{
                            pathname: `/restaurants/${this.props.restaurant.id}/reserve`,
                            state: {
                                time: new Date(time)
                            }
                        }}>{this.printTime(time)} </Link>
                    </button>
                )
            } else {
                button = (
                    <button key={i} className={`res-button res-inactive`}>
                        {this.printTime(time)}
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
                {this.generateReservationLinks(this.props.num)}
            </div>
        )
    }
};

export default ReservationButtons;