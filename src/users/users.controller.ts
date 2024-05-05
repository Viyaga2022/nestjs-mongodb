import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.serivice";
import { CreateUserDto } from "./dto/createUser.dto";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post()
    createUser(@Body() CreateUserDto: CreateUserDto) {
        console.log({ CreateUserDto });
        
    }
}