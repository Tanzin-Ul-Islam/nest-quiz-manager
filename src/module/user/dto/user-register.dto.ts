import { IsNotEmpty, IsEmail, Length } from "class-validator";
export default class UserRegisterDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(6, 15)
    password: string;

}   