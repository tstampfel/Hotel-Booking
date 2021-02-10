import { IRootState } from '../root-states'

export const getIsAuth = (state: IRootState) => state.auth.isAuthenticated