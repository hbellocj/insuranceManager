import { Action } from '@ngrx/store';
import { InsuranceObject } from 'src/app/objects/insurance.object';

export enum InsuranceActionType {
    ADD_FAV_ACTION = '[INS] Add favourite insurance',
    DELETE_FAV_ACTION = '[INS] Delete favourite insurance',
    GET_FAVS_ACTION = '[INS] Get favourite insurances'
}

export class AddFavInsurance implements Action {
    type = InsuranceActionType.ADD_FAV_ACTION;
    constructor(public payload: InsuranceObject) { }
}

export class DeleteFavInsurance implements Action {
    type = InsuranceActionType.DELETE_FAV_ACTION;
    constructor(public payload: InsuranceObject) { }
}

export class GetFavsInsurances implements Action {
    type = InsuranceActionType.GET_FAVS_ACTION;
    constructor(public payload: InsuranceObject[]) { }
}

export type InsuranceActions = AddFavInsurance |
    DeleteFavInsurance | GetFavsInsurances;
