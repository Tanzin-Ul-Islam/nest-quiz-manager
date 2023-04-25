import { Option } from "./entity/opiton.entity";
import { Repository, DataSource } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OptionRepository extends Repository<Option>{
    constructor(private dataSource: DataSource) {
        super(Option, dataSource.createEntityManager());
    }

    async getAllOption(): Promise<Option[] | Error> {
        const response = await this.find({})
        return response;
    }
}