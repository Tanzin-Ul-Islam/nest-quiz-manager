import { Repository, DataSource } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { Quiz } from './entity/quiz.entity';
import { UpdateQuizDto } from './dto/update-quiz.dto';
@Injectable()
export class QuizRepository extends Repository<Quiz> {
    constructor(private dataSource: DataSource) {
        super(Quiz, dataSource.createEntityManager());
    }
    createQuiz = async (dto: any): Promise<Quiz> => {
        const quiz = new Quiz();
        quiz.title = dto.title;
        quiz.description = dto.description;
        return await this.save(quiz);
    }
    getAllQuiz = async (): Promise<Quiz[] | Error> => {
        const response = await this.find({relations:['questions']});
        return response;
    }

    findOneQuiz = async (id: number): Promise<Quiz> => {
        const response = Quiz.findOne({
            where: {
                id: id
            },
            relations:['questions'],
        });
        return response;
    }

    updateEntity = async (id: number, updateQuizDto: UpdateQuizDto): Promise<Quiz> => {
        await this.update(id, { title: updateQuizDto.title, description: updateQuizDto.description });
        const response = await this.findOneQuiz(id);
        return response;
    }

    removeEntity =async (id:number) => {
            
    }
}