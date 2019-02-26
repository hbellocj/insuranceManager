import * as insurances from './insurance.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    insurance: insurances.InsuranceState;
}

export const reducers: ActionReducerMap<State> = {
    insurance: insurances.insuranceReducer
};
