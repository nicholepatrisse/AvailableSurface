import * as ReservationAPIUtil from '../util/reservations_api_util';
import { openModal } from './modal_actions';

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
    .then( payload => dispatch(receiveReservation(payload.reservation)))
    .then( () => dispatch(openModal('res-success')))
    .fail( errors => dispatch(receiveReservationErrors(errors.responseJSON)) )
);

export const updateReservation = reservation => dispatch => (
    ReservationAPIUtil.updateReservation(reservation)
    .then( payload => dispatch(receiveReservation(payload.reservation)))
    .then(() => dispatch(openModal('res-success')))
    .fail(errors => dispatch(receiveReservationErrors(errors.responseJSON)))
);

export const deleteReservation = reservationId => dispatch => (
    ReservationAPIUtil.deleteReservation(reservationId)
    .then( () => dispatch(removeReservation(reservationId)))
);