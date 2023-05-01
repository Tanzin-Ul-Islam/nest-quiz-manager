import { Controller, Get, Post, Patch, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('')
    async getUser() {
        return 'user'
    }
}
