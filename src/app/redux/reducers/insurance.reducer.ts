import { InsuranceObject } from 'src/app/objects/insurance.object';
import { InsuranceActionType, InsuranceActions } from '../actions/insurance.action';

export interface InsuranceState {
    insuranceFav: InsuranceObject[];
}

export const initialState: InsuranceState = {
    insuranceFav: null
};

export function insuranceReducer(state = initialState, action: InsuranceActions): InsuranceState {
    let favInsurances: InsuranceObject[];
    switch(action.type) {
        case InsuranceActionType.ADD_FAV_ACTION: {
            favInsurances[favInsurances.length + 1] = action.payload as InsuranceObject;
            return {
                ...state,
                insuranceFav: favInsurances
            };
        }
        case InsuranceActionType.DELETE_FAV_ACTION: {
            const insuranceToDelete = favInsurances.indexOf(action.payload as InsuranceObject);
            delete favInsurances[insuranceToDelete];
            favInsurances.slice(insuranceToDelete, 1);
            return {
                ...state,
                insuranceFav: favInsurances
            };
        }
        case InsuranceActionType.GET_FAV_LIST_ACTION: {
            return {
                ...state,
                insuranceFav: favInsurances
            };
        }
    }
}
