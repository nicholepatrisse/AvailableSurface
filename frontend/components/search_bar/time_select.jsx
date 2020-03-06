import React from 'react';

const NUM_OPTIONS = 15;

class TimeSelect extends React.Component {
    constructor(props) {
        super(props);
        this.selectTime = this.selectTime.bind(this)
    }

    objectify(timeString) {
        let hour = parseInt(timeString.slice(0,2));
        let minute = parseInt(timeString.slice(2));
        let timeObject = { minute, hour }
        return timeObject;
    }

    stringify(timeObject) {
        if (timeObject.minute < 10) timeObject.minute = `0${timeObject.minute}`;
        if (timeObject.hour < 10) timeObject.hour = `0${timeObject.hour}`;
        let timeString = `${timeObject.hour}${timeObject.minute}`
        return timeString;
    };

    printify(timeObject) {
        let printMinute = timeObject.minute;
        let printHour = timeObject.hour;
        let ampm = 'AM';
        if (printMinute < 10) printMinute = `0${printMinute}`;

        if (printHour === 12) {
            ampm = 'PM';
        } else if (printHour === 0) {
            printHour = 12;
        } else if (printHour > 12) {
            printHour -= 12;
            ampm = 'PM';
        };

        let printTime = `${printHour}:${printMinute} ${ampm}`
        return printTime;
    }

    addFifteen(timeObject) {
        timeObject.minute += 15;
        if (timeObject.minute === 60) {
            timeObject.minute = 0;
            timeObject.hour++
        };
        if (timeObject.hour === 24) {
            timeObject.hour = 0;
        }
        return timeObject;
    }

    subFifteen(timeObject) {
        timeObject.minute -= 15;
        if (timeObject.minute < 0) {
            timeObject.minute = 45;
            timeObject.hour--;
        };
        if (timeObject.hour < 0) {
            timeObject.hour = 23;
        }
        console.log(timeObject)
        return timeObject;
    }

    timeOptions(num) {
        const startTime = this.objectify(this.props.time)
        const times = [startTime];
        while (times.length < Math.floor(num/2)) {
            let lastTime = times[times.length - 1];
            let nextTime = Object.assign({}, lastTime);
            nextTime = this.addFifteen(nextTime);
            times.push(nextTime);
        }

        while (times.length < num) {
            let lastTime = times[0];
            let nextTime = Object.assign({}, lastTime);
            nextTime = this.subFifteen(nextTime);
            times.unshift(nextTime);
        }

        const timesArray = times.map((timeObject, i) => {
            let displayTime = this.printify(timeObject);
            let stateTime = this.stringify(timeObject);
            return (
                <div key={i} id={stateTime} className='time-option'>
                    {displayTime}
                </div>
            );
        });

        return timesArray;
    };
    
    selectTime(e) {
        let timeParam = {time: e.target.id}
        this.props.recieveTimeParam(timeParam)
    }

    handleClick() {
        if (this.props.modal === 'time-options') {
            document.addEventListener('click', this.props.closeModal)
        } else {
            document.removeEventListener('click', this.props.closeModal)
        }
    };

    selectorOpen() {
        return (
            <div className="time-box" onClick={this.selectTime}>
                { this.timeOptions(NUM_OPTIONS) }
            </div>
        )
    };

    selectorClosed() {
        return (
            <div className="time-box" onClick={() => this.props.openModal('time-options')}>
                { this.printify(this.objectify(this.props.time)) }
            </div>
        );
    };


    render() {
        return (
            <div className="time-selector">
                {this.handleClick()}
                {(this.props.modal === 'time-options') ? 
                this.selectorOpen() :
                this.selectorClosed()
                }
            </div>
        )
    }
};

export default TimeSelect;