export const RECIEVE_TIME_PARAM = 'RECIEVE_TIME_PARAM';
export const RECIEVE_PARTY_PARAM = 'RECIEVE_PARTY_PARAM';

export const recieveTimeParam = param => ({
    type: RECIEVE_TIME_PARAM,
    param
});

export const recievePartyParam = param => ({
    type: RECIEVE_PARTY_PARAM,
    param
});



