import { IUser } from './IUser';

export interface ITransaction {
    user: IUser,
    value: number,
    date: Date,
    transactions: ITransaction[],
    location: string
}