import { DataSource, In, Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { Injectable } from "@nestjs/common";
import UserRegisterDto from "./dto/user-register.dto";

@Injectable()
export class UserRepository extends Repository<User>{
    constructor(private readonly dataSource: DataSource) {
        super(User, dataSource.createEntityManager())
    }

    async createUser(dto: UserRegisterDto): Promise<User | Error> {
        const user = new User();
        user.name = dto.name;
        user.email = dto.email;
        user.password = dto.password;
        const response = await user.save();
        return response;
    }

    async getUserByEmail(dto: UserRegisterDto): Promise<User | Error> {
        const { email } = dto;
        const response = await this.findOne({ where: { email: email } });
        return response;
    }
}