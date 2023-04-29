import { Repository, DataSource } from "typeorm";
import { Question } from "./entities/question.entity";
import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { CreateQuizDto } from "../quiz/dto/create-quiz.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";

@Injectable()
export class QuestionRepository extends Repository<Question>{
    constructor(private dataSource: DataSource) {
        super(Question, dataSource.createEntityManager());
    }

    async createQuestion(dto: any, quiz: any): Promise<Question | Error> {
        let question = new Question();
        question.question = dto.question;
        const newQuestion = await this.save(question);
        quiz.questions.push(newQuestion);
        await quiz.save();
        return newQuestion;
    }

    async findAll(): Promise<Question[] | Error> {
        return await this.find({ relations: ['quiz'] });
    }

    async findOneEntity(id: number) {
        const response = await Question.findOne({ where: { id: id }, relations: ['quiz', 'options'] });
        return response;
    }

    async updateEntity(id: number, updateQuestionDto: UpdateQuestionDto) {
        const response = await this.update(id, {question: updateQuestionDto.question});
        return response;
    }
}