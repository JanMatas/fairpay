import { IUser } from './IUser';

export interface ITransaction {
    user: IUser,
    value: number,
    date: string,
    location: string
}