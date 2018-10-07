import * as constants from '../constants';

export interface IIncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}
export interface ILoadAll {
    type: constants.LOAD_ALL;
    payload: any;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm| ILoadAll;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

export function loadAll(data: any): ILoadAll {

    return {
        type: constants.LOAD_ALL,
        payload: data
    }

}