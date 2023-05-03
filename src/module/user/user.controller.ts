import { Controller, Get, Post, Patch, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import UserRegisterDto from './dto/user-register.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get('')
    async getUser() {
        return 'user'
    }

    @Post('/signup')
    @UsePipes(new ValidationPipe())
    async signup(@Body() userRegisterDto: UserRegisterDto) {
        const response = await this.userService.signup(userRegisterDto)
        return response;
    }
}
