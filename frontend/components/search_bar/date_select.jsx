import React from 'react';

class DateSelect extends React.Component {

    selectorOpen() {
        return (
            <div className="date-box">
                {/* DATE MENU HERE */}
            </div>
        )
    };

    objectify(dateParam) {
        let currentDate = dateParam.split('/');
        let dateObject = {
            month: currentDate[0],
            day: currentDate[1],
            year: currentDate[2]
        };
        return dateObject;
    }

    printify(dateObject) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let dateString = `${months[dateObject.month]} ${dateObject.day}, ${dateObject.year}`
        return dateString;
    }

    render() {
        return (
            <div className="date-selector">
                {/* {this.handleClick()} */}
                <div className="date-field">
                    {this.printify(this.objectify(this.props.date))}
                </div>
                {(this.props.modal === 'date-options') ?
                    this.selectorOpen() :
                    null
                }
            </div>
        )
    }
};

export default DateSelect;