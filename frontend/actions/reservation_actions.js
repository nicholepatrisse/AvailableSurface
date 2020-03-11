import * as ReservationAPIUtil from '../util/reservations_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS"

export const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});

export const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});

export const receiveReservationErrors = errors => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
});

export const createReservation = reservation => dispatch => (
    ReservationAPIUtil.createReservation(reservation)
    .then( payload => dispatch(receiveCurrentUser(payload)))
    .fail( errors => dispatch(receiveReservationErrors(errors.responseJSON)) )
);

export const updateReservation = reservation => dispatch => (
    ReservationAPIUtil.updateReservation(reservation)
    .then( reservation => dispatch(receiveReservation(reservation)))
);

export const deleteReservation = reservationId => dispatch => (
    ReservationAPIUtil.deleteReservation(reservationId)
    .then( () => dispatch(removeReservation(reservationId)))
);