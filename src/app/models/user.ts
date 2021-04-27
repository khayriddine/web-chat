import { Room } from "./room";

export class User{
    userId?: string;
    name: string;
    password:string;
    image: string;
    rooms: Room[];
}