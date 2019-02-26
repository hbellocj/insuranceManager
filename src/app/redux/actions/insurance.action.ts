import { Action } from '@ngrx/store';
import { InsuranceObject } from 'src/app/objects/insurance.object';

export enum InsuranceActionType {
    ADD_FAV_ACTION = '[INS] Add favourite insurance',
    DELETE_FAV_ACTION = '[INS] Delete favourite insurance',
    GET_FAV_LIST_ACTION = '[INS] Get all the favourites insurances'
}

export class AddFavInsurance implements Action {
    type = InsuranceActionType.ADD_FAV_ACTION;
    constructor(public payload: InsuranceObject) {}
}

export class DeleteFavInsurance implements Action {
    type = InsuranceActionType.DELETE_FAV_ACTION;
    constructor(public payload: InsuranceObject) {}
}
export class GetFavsInsuranceList implements Action {
    type = InsuranceActionType.GET_FAV_LIST_ACTION;
    constructor(public payload: InsuranceObject[]) {}
}

export type InsuranceActions = AddFavInsurance |
            DeleteFavInsurance |
            GetFavsInsuranceList;
