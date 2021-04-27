import { User } from './user';
import { Msg } from './msg';

export class Room{
    
    roomId: string;
    adminId: string;
    name: string;
    password: string;
    members: User[];
    allMsgs: Msg[];
    unreadMsgs: Msg[];
}