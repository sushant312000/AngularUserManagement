import { Role } from "./role"

export class User {
    userId: number = 0;
    userName: string = "";
    password: string = "";
    fullName: string = "";
    role: Role = new Role();
    active: boolean = false;
}
