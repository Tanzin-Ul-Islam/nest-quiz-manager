import { DataSource, In, Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository extends Repository<User>{
    constructor(private readonly dataSource: DataSource){
        super(User, dataSource.createEntityManager())
    }
}