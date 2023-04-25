import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { Question } from './entities/question.entity';
import { QuestionRepository } from './question.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from '../quiz/quiz.repository';
@Module({
  controllers: [QuestionController],
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionService, QuestionRepository, QuizRepository]
})
export class QuestionModule {}
