import moment from 'moment';

function ChangeDateFormat (date) {
    const dateTimeAgo = moment(date).fromNow();
    return dateTimeAgo
}

export default ChangeDateFormat
