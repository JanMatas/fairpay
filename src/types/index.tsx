import { ICommunity } from './ICommunity';
import { IUser } from './IUser';

export interface IStoreState {
    communities: ICommunity[];
    currentUser: IUser;
}