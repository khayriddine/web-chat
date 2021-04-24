import { User } from './user';
import { Msg } from './msg';

export class Room{
    name: string;
    roomId: string;
    adminId: number;
    users: User[];
    allMsgs: Msg[];
    unreadMsgs: Msg[];
}