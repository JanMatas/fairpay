import { IUser } from './IUser';

export interface ICommunity {
    communityName: string;
    members: IUser[],
}