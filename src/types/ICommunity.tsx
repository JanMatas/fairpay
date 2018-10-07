import { ITransaction } from './ITransaction';
import { IUser } from './IUser';

export interface ICommunity {
    communityName: string;
    icon: string;
    members: IUser[],
    spending: number,
    budget: number,
    transactions: ITransaction[],
    communityId: number,
}