import { InsuranceObject } from 'src/app/objects/insurance.object';
import { InsuranceActionType, InsuranceActions } from '../actions/insurance.action';

export interface InsuranceState {
    favInsurances: InsuranceObject[];
    insuranceFav: InsuranceObject;
    action: string;
}

export const initialState: InsuranceState = {
    favInsurances: [],
    insuranceFav: null,
    action: ''
};

export function insuranceReducer(state = initialState, action: InsuranceActions): InsuranceState {
    switch (action.type) {
        case InsuranceActionType.ADD_FAV_ACTION: {
            return {
                ...state,
                insuranceFav: action.payload as InsuranceObject,
                action: 'add'
            };
        }
        case InsuranceActionType.DELETE_FAV_ACTION: {
            return {
                ...state,
                insuranceFav: action.payload as InsuranceObject,
                action: 'del'
            };
        } case InsuranceActionType.GET_FAVS_ACTION: {
            return {
                ...state,
                favInsurances: action.payload as InsuranceObject[],
                action: 'get'
            };
        }
        default:
            return state;
    }
}
