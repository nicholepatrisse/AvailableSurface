export function printTime(time) {
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
};

export function printDate(time) {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let day = days[time.getDay()];
    let month = months[time.getMonth()]
    let date = time.getDate()
    return `${day}, ${month} ${date}`
}