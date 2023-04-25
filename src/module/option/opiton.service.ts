import { Injectable } from "@nestjs/common";
import { OptionRepository } from "./opiton.repository";
import { CreateOptionDto } from "./dto/create-option.dto";

@Injectable()
export class OptionService{
    constructor(private readonly optionRepository: OptionRepository){}

    async createOption(createOptionDto: CreateOptionDto){
        return createOptionDto
    }

    async getAllOption(){
        return await this.optionRepository.getAllOption()
    }

}