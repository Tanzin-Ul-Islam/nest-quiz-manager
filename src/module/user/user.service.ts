import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import UserRegisterDto from './dto/user-register.dto';
import { UserTransformer } from 'src/transformers/user.transformer';
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async signup(dto: UserRegisterDto) {
        const isEmailExist = await this.userRepository.getUserByEmail(dto);
        if (isEmailExist) {
            throw new HttpException('Email Already Exist', HttpStatus.NOT_ACCEPTABLE);
        }
        const response = await this.userRepository.createUser(dto);
        return UserTransformer(response);
    }
}
