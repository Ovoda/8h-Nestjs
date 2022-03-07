import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(body: CreateUserDto): void;
    findUser(id: string): Promise<import("./user.entity").User>;
    findAllUsers(email: string): Promise<import("./user.entity").User[]>;
    updateUser(id: string, body: CreateUserDto): Promise<import("./user.entity").User>;
    remove(id: string): Promise<import("./user.entity").User>;
}
