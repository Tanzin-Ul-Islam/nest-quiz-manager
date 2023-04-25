import { Injectable } from "@nestjs/common";
import { OptionRepository } from "./opiton.repository";

@Injectable()
export class OptionService{
    constructor(private readonly optionRepository: OptionRepository){}

    async getAllOption(){
        return await this.optionRepository.getAllOption()
    }

}