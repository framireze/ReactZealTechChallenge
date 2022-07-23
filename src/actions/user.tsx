import { USERS } from 'utils'

export const startLoadingNotes = () => ({
    type: 'load',
    paylod: USERS
});