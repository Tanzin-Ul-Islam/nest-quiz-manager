import { Option } from "./entity/opiton.entity";
import { Repository, DataSource } from "typeorm";
import { Injectable } from "@nestjs/common";
import { CreateOptionDto } from "./dto/create-option.dto";
import { Question } from "../question/entities/question.entity";

@Injectable()
export class OptionRepository extends Repository<Option>{
    constructor(private dataSource: DataSource) {
        super(Option, dataSource.createEntityManager());
    }

    async createOption(createOptionDto: CreateOptionDto, question:any) {
        let opiton = new Option();
        opiton.text = createOptionDto.text;
        opiton.isCorrect = createOptionDto.isCorrect;
        const newOption = await this.save(opiton);
        question.options.push(newOption);
        await question.save();
        return newOption;
    }

    async getAllOption(): Promise<Option[] | Error> {
        const response = await this.find({})
        return response;
    }
}