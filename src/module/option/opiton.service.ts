import { Injectable } from "@nestjs/common";
import { OptionRepository } from "./opiton.repository";
import { CreateOptionDto } from "./dto/create-option.dto";
import { QuestionRepository } from "../question/question.repository";

@Injectable()
export class OptionService {
    constructor(
        private readonly optionRepository: OptionRepository,
        private readonly questionRepository: QuestionRepository
    ) { }

    async createOption(createOptionDto: CreateOptionDto) {
        const { questionId } = createOptionDto;
        const question = await this.questionRepository.findOneEntity(questionId);
        const option = await this.optionRepository.createOption(createOptionDto, question);
        return option;
    }

    async getAllOption() {
        return await this.optionRepository.getAllOption()
    }

}