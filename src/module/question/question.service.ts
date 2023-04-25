import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionRepository } from './question.repository';
import { QuizRepository } from '../quiz/quiz.repository';

@Injectable()
export class QuestionService {
  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly quizRepository: QuizRepository
  ) { }

  async create(createQuestionDto: CreateQuestionDto) {
    const { quizId, ...transformedDto } = createQuestionDto;
    const quiz = await this.quizRepository.findOneQuiz(quizId);
    if(!quiz){
      return {msg: "Quiz id does not exist!"}
    }
    const response = await this.questionRepository.createQuestion(transformedDto, quiz);
    return response;
  }

  async findAll() {
    return await this.questionRepository.findAll();
  }

  async findOne(id: number) {
    const response = await this.questionRepository.findOneEntity(id);
    return response;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const response = await this.questionRepository.updateEntity(id, updateQuestionDto);
    return response;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
