import { Injectable } from "@nestjs/common";
import { QuizRepository } from "./quiz.repository";
import { CreateQuizDto } from "./dto/create-quiz.dto"
import { UpdateQuizDto } from "./dto/update-quiz.dto";

@Injectable()
export class QuizService {
    constructor(
        private quizRepository: QuizRepository,
    ) { }

    async createQuiz(dto: CreateQuizDto) {
        console.log(dto);
        const response = await this.quizRepository.createQuiz(dto);
        return response;
    }

    async getAllQuiz() {
        const response = await this.quizRepository.getAllQuiz();
        return response;
    }

    async findOne(id: number){
        const response = await this.quizRepository.findOneQuiz(id);
        return response;
    }

    async update(id:number, updateQuizDto: UpdateQuizDto){
        const response = await this.quizRepository.updateEntity(id, updateQuizDto);
        return response;
    }

    async remove(id: number){
        const response = await this.quizRepository.removeEntity(id);
        return response
    }
}