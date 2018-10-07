// src/reducers/index.tsx

import { EnthusiasmAction } from '../actions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM, LOAD_ALL } from '../constants/index';
import { IStoreState } from '../types/index';
import { ICommunity } from '../types/ICommunity';

export function enthusiasm(state: IStoreState, action: EnthusiasmAction): IStoreState {
  switch (action.type) {

    case INCREMENT_ENTHUSIASM:
      return { ...state };
    case DECREMENT_ENTHUSIASM:
      return { ...state };
    case LOAD_ALL: {
      console.log("test")
      const newCommunities: ICommunity[] = state.communities.map(c => {

        const communityTransactions = action.payload.filter((t: any) => t.communityId == c.communityId);
        return {
          ...c,
          transactions: communityTransactions
        }
      });
      console.log(newCommunities)
      return {
        ...state,
        communities: newCommunities
      };


    }

  }
  return state;
}