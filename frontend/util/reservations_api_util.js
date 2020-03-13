export const createReservation = reservation => (
    $.ajax({
        url: `/api/reservations`,
        method: 'POST',
        data: { reservation }
    })
);

export const updateReservation = reservation => (
    $.ajax({
        url: `/api/reservations/${reservation.id}`,
        method: 'PATCH',
        data: { reservation }
    })
);

export const deleteReservation = reservationId => (
    $.ajax({
        url: `/api/reservations/${reservationId}`,
        method: 'DELETE'
    })
);